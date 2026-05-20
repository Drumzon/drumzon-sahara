# Email copy para Kit (ConvertKit)

> Estos son los copies actualizados que tienes que pegar manualmente en
> las automations de Kit. Cubren la mención del LICENSE.txt para que el
> subscriber entienda los términos antes de publicar nada.

---

## 1. Lead magnet — "The First Drop" delivery email

**Trigger**: subscriber se da de alta vía el form de lead magnet
(NEXT_PUBLIC_KIT_FORM_ACTION)

**Where in Kit**: Forms → [Lead Magnet form] → Incentive email

**Subject**:
```
Tu First Drop está dentro (link debajo)
```

**Preheader**:
```
1 construction kit + 20 samples + 5 MIDIs + 3 presets. Cero teaser.
```

**Body** (HTML/Markdown según editor de Kit):

```
Hola,

Aquí está The First Drop — el pack completo que hubieras pagado:

[BOTÓN: Descargar The First Drop]
→ https://[R2_PUBLIC_URL]/the-first-drop.zip

Dentro encuentras:
• 1 construction kit completo (stems + arrangement)
• 20 samples individuales
• 5 MIDI files
• 3 presets de Serum / Vital

Todo a 24-bit / 44.1 kHz WAV. Para uso comercial en tus tracks.

—

PD importante: dentro del .zip encontrarás LICENSE.txt — léelo antes
de publicar nada. Resumen rápido:

✅ Samples, presets y MIDIs sueltos: tuyos para uso comercial en tus
   tracks (Spotify, Beatport, vinyl, cualquier plataforma).

❌ Publicar el construction kit AS-IS como tu propia canción requiere
   contacto previo. Envía email a contact@drumzon.com con tu plan de
   release y te respondemos en 24-48h con términos.

Si te gusta lo que oyes, [Drumzon Pro] hace esto cada mes:
→ https://drumzon.com/#pricing

Cancela en un click cuando quieras. Te quedas con todo lo descargado.

—

Drumzon Pro
contact@drumzon.com
```

---

## 2. Founding member welcome email (post-checkout)

**Trigger**: tag `KIT_TAG_FOUNDING` aplicado al subscriber (vía Stripe
webhook → `tagInKit()` en `app/api/webhooks/stripe/route.ts`)

**Where in Kit**: Automations → "Founding member welcome" → email 1

**Subject**:
```
Eres Founding #[X]. Sahara llega el 31 de mayo.
```

**Preheader**:
```
€19/mo locked for life. Aquí lo que te llega y cuándo.
```

**Body**:

```
Bienvenido. Eres Founding member oficial.

Tu €19/mo está congelado de por vida. Mientras Drumzon exista y tú estés
suscrito, ese precio no sube.

—

PRÓXIMOS PASOS

01. Sahara unlocks el 31 de mayo. Te enviamos el link de descarga ese
    día a este email.

02. Cada drop siguiente cae el 1 de cada mes. Recibirás email con el
    link en cuanto esté listo.

03. Para gestionar tu suscripción (cambiar tarjeta, cancelar, etc.)
    usa el Stripe Customer Portal:
    → [LINK_CUSTOMER_PORTAL]

—

CUANDO LLEGUE TU PRIMER DROP

Dentro del .zip vendrá LICENSE.txt — léelo antes de publicar. Resumen:

✅ Usa samples, presets y MIDIs en tus tracks para uso comercial.

❌ Publicar un construction kit AS-IS como tu propia canción requiere
   contacto previo (contact@drumzon.com). Te respondemos en 24-48h con
   términos. Es rápido — solo evitamos que dos artistas saquen la misma
   canción.

—

Si tienes cualquier duda, este email se responde. Lo leo personalmente.

—

Drumzon Pro
contact@drumzon.com
```

---

## 3. Standard member welcome email (post-checkout, Founding closed)

**Trigger**: tag `KIT_TAG_STANDARD` aplicado al subscriber

**Where in Kit**: Automations → "Standard member welcome" → email 1

**Subject**:
```
Estás dentro. Próximo drop: 1 de [mes siguiente].
```

**Preheader**:
```
€29/mo locked for life. Aquí cuándo te llega cada drop.
```

**Body**:

```
Bienvenido a Drumzon Pro.

Tu €29/mo está congelado de por vida. Mientras Drumzon exista y tú estés
suscrito, ese precio no sube.

—

PRÓXIMOS PASOS

01. El próximo drop cae el 1 de [mes siguiente]. Te enviamos el link
    de descarga ese día a este email.

02. Cada drop siguiente cae el 1 de cada mes. Email con link automático.

03. Para gestionar suscripción usa el Stripe Customer Portal:
    → [LINK_CUSTOMER_PORTAL]

—

CUANDO LLEGUE TU PRIMER DROP

Dentro del .zip vendrá LICENSE.txt — léelo antes de publicar. Resumen:

✅ Usa samples, presets y MIDIs en tus tracks para uso comercial.

❌ Publicar un construction kit AS-IS como tu propia canción requiere
   contacto previo (contact@drumzon.com). Te respondemos en 24-48h con
   términos.

—

Drumzon Pro
contact@drumzon.com
```

---

## 4. Monthly drop delivery email (template para cada drop)

**Trigger**: manual broadcast el 1 de cada mes a tags
`KIT_TAG_FOUNDING` + `KIT_TAG_STANDARD`

**Where in Kit**: Broadcasts → New broadcast → select tags

**Subject** (ejemplo Sahara, May):
```
[DROP] Sahara — May 2026
```

**Preheader**:
```
4 kits, 82 samples, 11 presets, 9 MIDIs. Link dentro.
```

**Body**:

```
El drop de este mes está listo.

[NOMBRE_DROP] · [MES] [AÑO]

Dentro:
• 4 construction kits completos
• ~82 samples individuales
• ~11 presets (Serum, Vital, Diva, Massive)
• ~9 MIDI files

[BOTÓN: Descargar [NOMBRE_DROP]]
→ https://[R2_PUBLIC_URL]/[pack-slug].zip

Tamaño: [~XXX] MB

—

Recordatorio rápido del LICENSE (dentro del .zip):

✅ Samples / presets / MIDIs sueltos → tuyos para uso comercial
❌ Construction kit AS-IS como tu release → contact@drumzon.com primero

—

Drumzon Pro
contact@drumzon.com
```

---

## 5. Apology email (Founding sold out mid-flight)

**Trigger**: webhook detectó race condition (alguien pagó pero el slot
99-100 ya estaba reservado por otro) — marcado como TODO en
`app/api/webhooks/stripe/route.ts:162`

**Where in Kit**: trigger via API o crear automation manual

**Subject**:
```
Lo sentimos — Founding cerró mientras pagabas. Refund completo.
```

**Body**:

```
Hola,

Acabas de intentar suscribirte a Drumzon Pro Founding pero los últimos
slots se cerraron mientras procesabas el pago.

Hemos refundeado el importe completo automáticamente. Verás el reembolso
en tu tarjeta en 5-10 días bancarios.

Si todavía quieres entrar, Drumzon Pro Standard sigue abierto a
€29/mo locked for life:
→ https://drumzon.com/#pricing

Lamentamos la fricción. Si tienes cualquier duda:
contact@drumzon.com — leemos cada email.

—

Drumzon Pro
```

---

## Cómo desplegar estos copies en Kit

1. **Login en Kit** → https://app.kit.com
2. Para cada email arriba:
   - Lead magnet: `Grow → Landing Pages & Forms → [tu form] → Settings → Incentive`
   - Welcome Founding: `Automate → Automations → "Founding welcome" → email 1 → Edit`
   - Welcome Standard: `Automate → Automations → "Standard welcome" → email 1 → Edit`
   - Drop mensual: `Send → Broadcasts → New broadcast → select tags → paste body`
3. **Reemplaza** los placeholders:
   - `[R2_PUBLIC_URL]` → el real (ej. `pub-xxxxx.r2.dev`)
   - `[LINK_CUSTOMER_PORTAL]` → tu Stripe Customer Portal URL
   - `[NOMBRE_DROP]`, `[MES]`, `[AÑO]`, `[pack-slug]` → según drop concreto
4. **Test** envío a tu propio email antes de poner live
5. **Verifica** que LICENSE.txt está dentro del .zip que sirves desde R2
   (script `./scripts/build-pack.sh` lo inyecta automáticamente)
