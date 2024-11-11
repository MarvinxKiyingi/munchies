import { IRestaurant } from '@/app/Models/IRestaurant';
import { IRestaurantWithOpenStatus } from '@/app/Models/IRestaurantWithOpenStatus';
import { isRestaurantCurrentlyOpen } from './isRestaurantCurrentlyOpen';

export const sortRestaurantsByStatusAndDeliveryTime = async (
  filteredRestaurants: IRestaurant[]
): Promise<IRestaurantWithOpenStatus[]> => {
  const restaurantsWithStatus = await Promise.all(
    filteredRestaurants.map(async (restaurant) => {
      const isOpen = await isRestaurantCurrentlyOpen(restaurant.id);
      return {
        ...restaurant,
        isOpen: isOpen || { restaurant_id: restaurant.id, is_open: false },
      };
    })
  );

  return restaurantsWithStatus.sort((a, b) => {
    const isOpenA = a.isOpen?.is_open ?? false;
    const isOpenB = b.isOpen?.is_open ?? false;
    if (isOpenA !== isOpenB) {
      return isOpenA ? -1 : 1;
    }

    const deliveryTimeA = a.delivery_time_minutes ?? 0;
    const deliveryTimeB = b.delivery_time_minutes ?? 0;
    return deliveryTimeA - deliveryTimeB;
  });
};
