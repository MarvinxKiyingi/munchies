export const toggleItemInArray = (
  items: string[],
  targetItem: string | null
) => {
  if (!targetItem) return items;
  return items.includes(targetItem)
    ? items.filter((current) => current !== targetItem)
    : [...items, targetItem];
};
