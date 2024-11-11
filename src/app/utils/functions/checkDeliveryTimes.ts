import { deliveryTimeOptions } from '../deliveryTimeOptions';

export const checkDeliveryTimes = (
  deliveryTime: number,
  selectedDeliveryTimeValues: string[]
): boolean => {
  if (selectedDeliveryTimeValues.length === 0) return true;

  return selectedDeliveryTimeValues.some((selectedValue) => {
    const deliveryOption = deliveryTimeOptions.find(
      (option) => option.value === selectedValue
    );

    if (!deliveryOption) return false;

    const [min, max] = deliveryOption.value.split('-').map(Number);

    return (
      deliveryTime >= min && (max ? deliveryTime <= max : deliveryTime > 60) // Handle "1 hour+" case
    );
  });
};
