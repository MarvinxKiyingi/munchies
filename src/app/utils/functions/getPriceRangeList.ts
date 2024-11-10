import { IPriceRange } from '../../Models/IPriceRange';
import { getPriceRange } from './getPriceRange';
import { getRestaurants } from './getRestaurants';

export const getPriceRangeList = async (): Promise<IPriceRange[]> => {
  try {
    const restaurants = await getRestaurants();

    const priceRanges = await Promise.all(
      restaurants.map((restaurant) =>
        getPriceRange(restaurant.price_range_id).catch((error) => {
          console.error(
            `Failed to fetch price range for restaurant ${restaurant.id}:`,
            error
          );
          return null;
        })
      )
    );

    return priceRanges.filter(
      (priceRange): priceRange is IPriceRange => priceRange !== null
    );
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
