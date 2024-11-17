import { IActiveFiltersObject } from '@/app/Models/IActiveFiltersObject';
import { addOrRemoveItem } from './addOrRemoveItem';

export const generateParamLink = (
  activeFiltersObject: IActiveFiltersObject,
  newDeliveryTime: string | null,
  newFilter: string | null,
  newPriceRange: string | null
): string => {
  const { activeFilters, activeDeliveryTimes, activePriceRanges } =
    activeFiltersObject;

  const updatedFilters = addOrRemoveItem(activeFilters, newFilter);
  const updatedPriceRanges = addOrRemoveItem(activePriceRanges, newPriceRange);
  const updatedDeliveryTimes = addOrRemoveItem(
    activeDeliveryTimes,
    newDeliveryTime
  );

  const queryParams = new URLSearchParams();

  const appendParams = (paramName: string, values: string[]) => {
    values.forEach((value) => queryParams.append(paramName, value));
  };

  appendParams('delivery_time', updatedDeliveryTimes);
  appendParams('category', updatedFilters);
  appendParams('price_range', updatedPriceRanges);

  return `?${queryParams.toString()}`;
};
