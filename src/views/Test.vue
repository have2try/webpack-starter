<template>
  <div class="test">
    <h1>This is an test page.</h1>
    <button v-on:click="counter">
      {{ x }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  setup() {
    let msg = "This is an test page.";
    let x = ref(0);
    function counter() {
      x.value++;
    }
    onMounted(() => {
      counter();
    });

    watch(x, (newVal, oldVal) => {
      console.log({ oldVal, newVal });
    });

    return {
      x,
      msg,
      counter,
    };
  },
});
</script>

<style scoped>
</style>