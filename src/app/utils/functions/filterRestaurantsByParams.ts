import { IFilterRestaurantsByParams } from '../../Models/IFilterRestaurantsByParams';
import { checkDeliveryTime } from './checkDeliveryTime';
import { checkFilters } from './checkFilters';
import { checkPriceRange } from './checkPriceRange';

export const filterRestaurantsByParams = ({
  filterIds,
  priceRangeIds,
  restaurants,
  selectedDeliveryTime,
}: IFilterRestaurantsByParams) => {
  if (!restaurants || restaurants.length === 0) {
    return [];
  }

  return restaurants.filter((restaurant) => {
    const matchesDeliveryTime = checkDeliveryTime(
      restaurant.delivery_time_minutes,
      selectedDeliveryTime
    );

    const matchesFilters = checkFilters(restaurant.filter_ids, filterIds);
    const matchesPriceRange = checkPriceRange(
      restaurant.price_range_id,
      priceRangeIds
    );

    return matchesDeliveryTime && matchesFilters && matchesPriceRange;
  });
};
