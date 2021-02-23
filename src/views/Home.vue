<template>
  <div class="Home">
    <h1>This is an {{ pageName }} page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      pageName: "home",
    };
  },
});
</script>

<style scoped>
</style>