export function getUser() {
  const data = localStorage.getItem("user");
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}
