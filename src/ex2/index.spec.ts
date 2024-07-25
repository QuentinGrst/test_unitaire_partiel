import { submitOrder } from './index';
import { sendOrderEmail } from './lib/email';

jest.mock('./lib/email');

describe('submitOrder', () => {
  it('devrait soumettre la commande et mettre isSubmitted à true', () => {
    const order = { id: 1, isSubmitted: false };
    const submittedOrder = submitOrder(order);
    expect(submittedOrder.isSubmitted).toBe(true);
  });

  it("devrait appeler sendOrderEmail avec l'identifiant de la commande", () => {
    const order = { id: 1, isSubmitted: false };
    submitOrder(order);
    expect(sendOrderEmail).toHaveBeenCalledWith(order.id.toString());
  });

  it('devrait émettre une erreur si la commande est déjà soumise', () => {
    const order = { id: 1, isSubmitted: true };
    expect(() => submitOrder(order)).toThrow('La commande est déjà soumise.');
  });

  it('ne devrait pas appeler sendOrderEmail si la commande est déjà soumise', () => {
    const order = { id: 1, isSubmitted: true };
    try {
      submitOrder(order);
    } catch (e) {}
    expect(sendOrderEmail).not.toHaveBeenCalled();
  });
});
