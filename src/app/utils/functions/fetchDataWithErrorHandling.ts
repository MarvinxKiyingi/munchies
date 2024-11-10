export const fetchDataWithErrorHandling = async <T>(
  fetchFunction: () => Promise<T>,
  errorMessage: string
): Promise<T> => {
  try {
    return await fetchFunction();
  } catch (error) {
    console.error(`${errorMessage}:`, error);
    return [] as T;
  }
};
