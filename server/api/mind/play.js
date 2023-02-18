import axios from "axios";
import { BASE_URL } from "~~/server";

export default defineEventHandler(async (event) => {
  const { link } = getQuery(event);

  let url = `${BASE_URL}/mind/content.php?link=${link}`;
  let { data } = await axios.get(url);

  return {
    item: data,
  };
});
