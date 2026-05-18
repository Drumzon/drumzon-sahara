-- ─── Atomic Founding slot reservation ─── --
-- Returns TRUE if a slot was reserved, FALSE if Founding is closed.
-- Uses SELECT FOR UPDATE to serialize concurrent reservations and
-- guarantee that exactly 100 Founding members can ever exist.
--
-- Called by the Stripe webhook handler on `customer.subscription.created`
-- events with tier='founding'. If FALSE returned, webhook refunds the
-- charge and cancels the subscription.

CREATE OR REPLACE FUNCTION reserve_founding_slot()
RETURNS BOOLEAN AS $$
DECLARE
  current_slots INT;
  cap INT;
BEGIN
  -- Lock the row to serialize concurrent reservations
  SELECT slots_claimed, max_slots
    INTO current_slots, cap
  FROM founding_counter
  WHERE id = 1
  FOR UPDATE;

  IF current_slots >= cap THEN
    RETURN FALSE;
  END IF;

  UPDATE founding_counter
  SET slots_claimed = slots_claimed + 1,
      closed_at = CASE WHEN slots_claimed + 1 >= cap THEN NOW() ELSE NULL END
  WHERE id = 1;

  RETURN TRUE;
END;
$$ LANGUAGE plpgsql;

-- Reverse function — used if we need to release a slot (e.g. webhook race
-- condition where Founding refund needs to also free the slot back up).
CREATE OR REPLACE FUNCTION release_founding_slot()
RETURNS VOID AS $$
BEGIN
  UPDATE founding_counter
  SET slots_claimed = GREATEST(0, slots_claimed - 1),
      closed_at = NULL
  WHERE id = 1;
END;
$$ LANGUAGE plpgsql;

-- Grant execution to the service role (used by webhook handler)
GRANT EXECUTE ON FUNCTION reserve_founding_slot() TO service_role;
GRANT EXECUTE ON FUNCTION release_founding_slot() TO service_role;
