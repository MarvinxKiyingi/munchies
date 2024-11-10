import { IPriceRange } from '../../Models/IPriceRange';
import { getPriceRangeList } from './getPriceRangeList';

export const getFilteredPriceRangeList = async (): Promise<IPriceRange[]> => {
  try {
    const priceRanges = await getPriceRangeList();

    return priceRanges.filter(
      (item, index, self) =>
        self.findIndex(({ range }) => range === item.range) === index
    );
  } catch (error) {
    console.error('Error fetching price ranges:', error);
    return [];
  }
};
