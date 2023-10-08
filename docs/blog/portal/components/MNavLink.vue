<script setup lang="ts">
import { computed } from 'vue'

import { NavLink } from './type'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  desc?: NavLink['desc']
  link: NavLink['link']
}>()

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})
</script>

<template>
  <a v-if="link" class="m-nav-link" :href="link" target="_blank" rel="noreferrer">
    <article class="box">
      <h5 v-if="title" class="title" :title="title">{{ title }}</h5>
      <p v-if="desc" class="desc" :title="desc">{{ desc }}</p>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.m-nav-link {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none !important;
  &:hover {
    //background-color: var(--vp-c-bg-soft);
    border-color: var(--vp-c-brand);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 16px;
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 600;
    border-left: 5px solid #5468ff;
    padding: 0 0 0 10px;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: 10px 0 0;
    line-height: 20px;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    .box {
      padding: 8px;
    }
    .icon {
      width: 40px;
      height: 40px;
    }
    .title {
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>
