<template>
  <div class="test">
    <h1>This is an test page.</h1>
    <p>x = {{ x }}</p>
    <p>y = {{ y }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    let x = 0;
    let y = ref(0);

    onMounted(() => {
      x++;
      y.value++;
    });

    return {
      x,
      y,
    };
  },
});
</script>

<style scoped>
</style>