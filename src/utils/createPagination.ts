export const createPagination = (
  currentPage: number,
  arrLength: number,
  pageSize = 6
) => {
  const firstIndex = currentPage * pageSize - pageSize;
  const lastIndex = firstIndex + pageSize;
  const totalPages = Math.ceil(arrLength / pageSize);

  return { totalPages, firstIndex, lastIndex };
};
