import { IFilterRestaurantsByParams } from '../../Models/IFilterRestaurantsByParams';
import { deliveryTimeOptions } from '../deliveryTimeOptions';

export const filterRestaurantsByParams = ({
  filterIds,
  priceRangeIds,
  restaurants,
  selectedDeliveryTime,
}: IFilterRestaurantsByParams) => {
  return restaurants.filter((restaurant) => {
    const matchesDeliveryTime =
      !selectedDeliveryTime ||
      deliveryTimeOptions.some((option) => {
        const [min, max] = option.value.split('-').map(Number);
        return (
          selectedDeliveryTime === option.value &&
          restaurant.delivery_time_minutes >= min &&
          (max
            ? restaurant.delivery_time_minutes <= max
            : restaurant.delivery_time_minutes > 60)
        );
      });

    const matchesFilters =
      filterIds.length === 0 ||
      filterIds.some((id) => restaurant.filter_ids.includes(id));

    const matchesPriceRange =
      priceRangeIds.length === 0 ||
      priceRangeIds.includes(restaurant.price_range_id);

    return matchesDeliveryTime && matchesFilters && matchesPriceRange;
  });
};
