import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentSessionDto } from './dto/payment-session.dto';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    // Inicializamos Stripe sin pasarle el apiVersion forzado para evitar incompatibilidades
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET')!);
  }

  async createPaymentSession(paymentSessionDto: PaymentSessionDto) {
    const { orderId, currency, items } = paymentSessionDto;

    const successUrl = this.configService.get<string>('STRIPE_SUCCESS_URL')!;
    const cancelUrl = this.configService.get<string>('STRIPE_CANCEL_URL')!;

    const lineItems = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Conversión a centavos obligatoria
      },
      quantity: item.quantity,
    }));

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      payment_intent_data: {
        metadata: {
          orderId: orderId, // Requisito: el orderId viaja en el metadata
        },
      },
    });

    return {
      id: session.id,
      url: session.url,
    };
  }
}
