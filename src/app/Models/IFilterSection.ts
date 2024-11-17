import { IFiltersList } from './IFilter';
import { IPriceRange } from './IPriceRange';

export type IFilterSection = IFiltersList & {
  filteredPriceRanges: IPriceRange[] | null;
};
