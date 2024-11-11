export const getSelectedParams = (
  param: string | string[] | null | undefined
): string[] => {
  if (Array.isArray(param)) {
    return param;
  }

  if (param) {
    return [param];
  }

  return [];
};
