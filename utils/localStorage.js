export function getUser() {
  const data = localStorage.getItem("user");
  if (!data) {
    return null;
  }
  return JSON.parse(data);
}

export function getIdSaved() {
  const ids = localStorage.getItem("savedJob");
  if (!ids) {
    return null;
  }
  return JSON.parse(ids);
}
