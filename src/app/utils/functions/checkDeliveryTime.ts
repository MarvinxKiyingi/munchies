import { deliveryTimeOptions } from '../deliveryTimeOptions';

export const checkDeliveryTime = (
  deliveryTime: number,
  selectedDeliveryTime: string | string[]
): boolean => {
  if (!selectedDeliveryTime) return true;

  return deliveryTimeOptions.some((option) => {
    const [min, max] = option.value.split('-').map(Number);
    return (
      selectedDeliveryTime === option.value &&
      deliveryTime >= min &&
      (max ? deliveryTime <= max : deliveryTime > 60)
    );
  });
};
