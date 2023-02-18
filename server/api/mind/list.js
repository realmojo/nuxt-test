import axios from "axios";
import { BASE_URL } from "~~/server";

export default defineEventHandler(async (event) => {
  const { category, page } = getQuery(event);

  let queryParams = "?";
  if (category) {
    queryParams += `category=${category}`;
  }
  if (page) {
    queryParams += `&page=${page}`;
  }

  const url = `${BASE_URL}/mind/list.php${queryParams}`;
  const { data } = await axios.get(url);

  return {
    data,
  };
});
