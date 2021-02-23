<template>
  <div class="test">
    <h1>This is an test page.</h1>
    <ul>
      <li>Name: {{ username }}</li>
      <li>age: {{ age }}</li>
      <li>gender: {{ gender }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const profile = {
      username: "Suzy",
      age: 27,
      gender: "female",
    };

    const profileRefs = toRefs(reactive(profile));

    onMounted(() => {
      profileRefs.age.value = 30;
      profile.age = 33;
    });

    return {
      ...profileRefs,
    };
  },
});
</script>

<style scoped>
</style>