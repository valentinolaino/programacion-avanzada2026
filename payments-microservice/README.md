# TP4 — Sesiones de pago y Webhook Stripe

## Cómo levantar el proyecto

1. Instalar las dependencias:

```bash
npm install
```

2. Copiar el archivo de variables de entorno:

```bash
cp .env.template .env
```

3. Completar el archivo `.env` con las variables necesarias:

```env
PORT=3003
STRIPE_SECRET=tu_clave_secreta
STRIPE_SUCCESS_URL=http://localhost:3003/payments/success
STRIPE_CANCEL_UR=http://localhost:3003/payments/cancel
STRIPE_ENDPOINT_SECRET=tu_webhook_secret
```

4. Iniciar el servidor:

```bash
npm run start:dev
```

El microservicio quedará disponible en:

```text
http://localhost:3003
```

## Rutas

### Crear sesión de pago

**POST** `/payments/create-payment-session`

Crea una Checkout Session en Stripe y devuelve los datos de la sesión, incluyendo su `id` y `url`.

Ejemplo de request:

```json
{
  "orderId": "ord-1",
  "currency": "usd",
  "items": [
    {
      "name": "Producto",
      "price": 20,
      "quantity": 1
    }
  ]
}
```

### Webhook de Stripe

**POST** `/payments/webhook`

Recibe las notificaciones de Stripe sobre los pagos realizados. La ruta requiere el header `stripe-signature` y verifica la firma del webhook antes de procesar el evento.

Para probarlo localmente:

```bash
stripe listen --forward-to localhost:3003/payments/webhook
```

### Ruta de pago exitoso

**GET** `/payments/success`

Respuesta:

```json
{
  "ok": true,
  "message": "Payment successful"
}
```

### Ruta de pago cancelado

**GET** `/payments/cancel`

Respuesta:

```json
{
  "ok": false,
  "message": "Payment cancelled"
}
```
