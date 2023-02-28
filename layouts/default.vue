<template>
  <div>
    <header>
      <div class="header-wrap">이곳은 헤더 입니다.</div>
      <div class="mindpang-menu-wrap">
        <ul class="mindpang-menu">
          <li v-for="menu in menuItems" :key="menu.key">
            <a
              :href="`/${menu.key !== 'all' ? menu.key : ''}`"
              :class="`menu-item ${
                category === menu.key ? 'menu-item-active' : ''
              }`"
              target="_self"
            >
              {{ menu.title }}
            </a>
          </li>
        </ul>
      </div>
    </header>

    <slot></slot>
  </div>
</template>

<script setup>
const menuItems = ref([
  {
    key: "all",
    title: "전부",
  },
  {
    key: "love",
    title: "메뉴1",
  },
  {
    key: "enter",
    title: "메뉴2",
  },
]);
</script>
