import { IPriceRange } from '../../Models/IPriceRange';
import { getPriceRangeList } from './getPriceRangeList';

export const getFilteredPriceRangeList = async (): Promise<
  IPriceRange[] | null
> => {
  const priceRanges = await getPriceRangeList();

  if (!priceRanges || priceRanges.length === 0) {
    console.log('No price ranges available.');
    return [];
  }

  // Remove duplicate price ranges
  return priceRanges.filter(
    (item, index, self) =>
      self.findIndex(({ range }) => range === item.range) === index
  );
};
