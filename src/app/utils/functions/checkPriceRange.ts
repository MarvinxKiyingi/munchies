export const checkPriceRange = (
  restaurantPriceRange: string,
  priceRangeIds: string[]
): boolean => {
  if (priceRangeIds.length === 0) return true;
  return priceRangeIds.includes(restaurantPriceRange);
};
