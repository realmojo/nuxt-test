import axios from "axios";
import { BASE_URL } from "~~/server";

export default defineEventHandler(async (event) => {
  const { search, category } = getQuery(event);

  let queryParams = "?";
  if (search) {
    queryParams += `search=${search}`;
  }

  if (category) {
    queryParams += `category=${category}`;
  }

  const url = `${BASE_URL}/mind/main.php${queryParams}`;
  const { data } = await axios.get(url);

  return {
    items: data.items,
    recentlyItems: data.recentlyItems,
    popularItems: data.popularItems,
  };
});
