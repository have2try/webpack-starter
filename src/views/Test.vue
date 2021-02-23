<template>
  <div class="test">
    <h1>This is an {{ pageName }}.</h1>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default defineComponent({
  setup() {
    let pageName = "test page";
    console.log("setup %s", pageName);

    onBeforeMount(() => {
      console.log("onBeforeMount %s", pageName);
    });

    onMounted(() => {
      console.log("onMounted %s", pageName);
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate %s", pageName);
    });

    onUpdated(() => {
      console.log("onUpdated %s", pageName);
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount %s", pageName);
    });

    onUnmounted(() => {
      console.log("onUnmounted %s", pageName);
    });

    return {
      pageName,
    };
  },
});
</script>

<style scoped>
</style>