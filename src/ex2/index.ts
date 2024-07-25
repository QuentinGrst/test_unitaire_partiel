import { sendOrderEmail } from './lib/email';

interface Order {
  id: number;
  isSubmitted: boolean;
}

export function submitOrder(order: Order): Order {
  if (order.isSubmitted) {
    throw new Error('La commande est déjà soumise.');
  }
  order.isSubmitted = true;
  sendOrderEmail(order.id.toString());
  return order;
}
