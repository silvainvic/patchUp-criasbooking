export function setLocalStorage(key, value) {
  if (value.token) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}