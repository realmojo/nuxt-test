import axios from "axios";
import { BASE_URL } from "~~/server";

export default defineEventHandler(async (event) => {
  let url = `${BASE_URL}/mind/recently.php`;
  let { data } = await axios.get(url);

  return {
    items: data,
  };
});
