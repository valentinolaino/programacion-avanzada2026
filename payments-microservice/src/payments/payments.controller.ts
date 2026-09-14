import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';
import type { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Controller('payments')
export class PaymentsController {
  private stripe: Stripe;
  private endpointSecret: string;

  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET')!);
    this.endpointSecret = this.configService.get<string>(
      'STRIPE_ENDPOINT_SECRET',
    )!;
  }

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  success() {
    return { ok: true, message: 'Payment successful' };
  }

  @Get('cancel')
  cancel() {
    return { ok: false, message: 'Payment cancelled' };
  }

  @Post('webhook')
  async stripeWebhook(
    @Req() req: Request,
    @Headers('stripe-signature') signature: string,
  ) {
    // Uso (req as any) para evitar el error de tipado en rawBody
    const rawBody = (req as any).rawBody;
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        rawBody!,
        signature,
        this.endpointSecret,
      );
    } catch (err: any) {
      // Tipeo el err como any para leer el message con seguridad
      throw new BadRequestException(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      const paymentIntentId = charge.payment_intent as string;

      if (paymentIntentId) {
        const paymentIntent =
          await this.stripe.paymentIntents.retrieve(paymentIntentId);
        const orderId = paymentIntent.metadata.orderId;
        console.log(`Pago exitoso para el orderId: ${orderId}`); //[cite: 1]
      }
    } else {
      console.log(`Evento no manejado: ${event.type}`); //[cite: 1]
    }

    return { received: true };
  }
}
