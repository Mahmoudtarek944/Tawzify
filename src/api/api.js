import axios from "axios";

const api = "https://remotive.com/api/remote-jobs";
export async function getAllData() {
  let res = await axios.get(api);
  if (res.status === 200) {
    return res.data;
  } else {
    return null;
  }
}
