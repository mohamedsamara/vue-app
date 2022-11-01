<script lang="ts">
export default {
  props: {
    msg: String,
  },
};
</script>

<template>
  <div class="greetings">
    <h4 class="green">{{ msg }}</h4>
  </div>
</template>

<style scoped>
.greetings h4 {
  font-size: 1.2rem;
  text-align: center;
}
</style>
