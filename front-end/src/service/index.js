export default function setLocalStorage(key, value) {
  if (value.token) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}