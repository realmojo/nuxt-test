<template>
  <div>hihi</div>
</template>
<script setup>
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const recentlyItems = ref([]);
const popularItems = ref([]);
const page = ref(1);

const searchText = computed(() => {
  return route.query.search;
});

let queryParams = "";
if (searchText.value) {
  queryParams = `?search=${searchText.value}`;
}

const url = `${runtimeConfig.BASE_URL}/mind/main.php${queryParams}`;
const { data } = await useFetch(url, {
  key: "main",
  method: "get",
});

const d = JSON.parse(data._rawValue);
items.value = d.items;
recentlyItems.value = d.recentlyItems;
popularItems.value = d.popularItems;

const doMoreItem = async () => {
  const url = `/api/mind/list?page=${page.value}`;
  const { data } = await useFetch(url, {
    key: "moreList",
    method: "get",
  });
  const moreItems = data._rawValue.data;
  if (moreItems.length) {
    page.value += 1;
    items.value = items.value.concat(moreItems);
  }
};
</script>
