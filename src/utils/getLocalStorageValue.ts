export const getLocalStorageValue = <T>(name: string) => {
  if (typeof window === "undefined") return null;

  try {
    const data = localStorage.getItem(name);
    return data ? (JSON.parse(data) as T) : null;
  } catch (err) {
    return null;
  }
};
