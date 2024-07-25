import { isRangeAvailable, DateRange } from './index';

describe('isRangeAvailable', () => {
  it('devrait retourner true si la plage demandée est dans la plage disponible', () => {
    const requestedRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-10'),
    };
    const availableRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it('devrait retourner false si la plage demandée commence avant la plage disponible', () => {
    const requestedRange: DateRange = {
      start: new Date('2023-06-30'),
      end: new Date('2023-07-10'),
    };
    const availableRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('devrait retourner false si la plage demandée se termine après la plage disponible', () => {
    const requestedRange: DateRange = {
      start: new Date('2023-07-05'),
      end: new Date('2023-07-20'),
    };
    const availableRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('devrait retourner true si la plage demandée est exactement la même que la plage disponible', () => {
    const requestedRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    const availableRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it('devrait retourner false si la plage demandée est en dehors de la plage disponible', () => {
    const requestedRange: DateRange = {
      start: new Date('2023-07-16'),
      end: new Date('2023-07-20'),
    };
    const availableRange: DateRange = {
      start: new Date('2023-07-01'),
      end: new Date('2023-07-15'),
    };
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });
});
