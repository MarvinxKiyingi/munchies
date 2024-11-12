export const checkFilters = (
  restaurantFilters: string[],
  filterIds: string[]
): boolean => {
  if (filterIds.length === 0) return true;
  return filterIds.some((id) => restaurantFilters.includes(id));
};
