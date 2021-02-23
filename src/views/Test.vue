<template>
  <div class="test">
    <h1>This is an test page.</h1>
    <button v-on:click="counter">z = {{ z }}</button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  ref,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    let x = ref(2);
    let y = ref(3);

    let z: ComputedRef = computed(() => {
      return x.value + y.value;
    });

    const counter = () => {
      x.value++;
    };

    return {
      counter,
      z,
    };
  },
});
</script>

<style scoped>
</style>