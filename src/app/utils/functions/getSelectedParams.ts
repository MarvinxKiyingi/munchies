export const getSelectedParams = (
  param: string | string[] | null
): string[] => {
  if (Array.isArray(param)) {
    return param;
  }
  return param ? [param].filter(Boolean) : [];
};
