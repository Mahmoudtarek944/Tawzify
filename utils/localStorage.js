export function getUser() {
  const data = localStorage.getItem("user");
  try {
    if (!data) {
      throw new Error("You Haven't an Account, please Create Account");
    }
    return JSON.parse(data);
  } catch (err) {
    console.error(err.message);
    return null;
  }
}
