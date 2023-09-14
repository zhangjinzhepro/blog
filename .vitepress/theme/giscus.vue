<template>
  <div class="comments">
    <giscus
      repo="zhangjinzhepro/blog"
      repo-id="MDEwOlJlcG9zaXRvcnkyNTI4OTA0OTM="
      category="General"
      category-id="DIC_kwDODxLNfc4CV3Ab"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>
<script lang="ts" setup>
import giscus from '@giscus/vue'
import { reactive, ref, watch } from "vue";
import { useData, useRoute } from "vitepress";

const route = useRoute();

const { title } = useData();

// params generate in https://giscus.app/zh-CN
const giscusConfig = reactive({
  repo: "justin3go/justin3go.github.io",
  repoId: "XXX",
  category: "Q&A",
  categoryId: "XXX",
  mapping: "title",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  theme: "light",
  lang: "zh-CN",
  loading: "lazy",
});

const showComment = ref(true);
watch(
    () => route.path,
    () => {
      showComment.value = false;
      setTimeout(() => {
        showComment.value = true;
      }, 200);
    },
    {
      immediate: true,
    }
);
</script>
<style>
/* // TODO 使用giscus自定义主题结合vitepress主题切换 */
.comments {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
</style>
