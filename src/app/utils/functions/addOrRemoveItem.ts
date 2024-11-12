export const addOrRemoveItem = (
  items: string[],
  targetItem: string | null
): string[] => {
  if (!targetItem) return items;

  return items.includes(targetItem)
    ? items.filter((item) => item !== targetItem)
    : [...items, targetItem];
};
