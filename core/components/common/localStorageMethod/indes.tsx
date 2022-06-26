export function getLocalStorage(name: string) {
  const user = localStorage.getItem(name);
  if (!user) return;
  try {
    return JSON.parse(user);
  } catch (err) {}
}

export const setLocalStorage = (name: string, item: any) => {
  localStorage.setItem(name, JSON.stringify(item));
};
