<script setup lang="ts">
defineProps<{
  loading: boolean;
  text: string;
}>();
</script>

<template>
  <div class="loader">
    <p v-if="loading">{{ text }}</p>
  </div>
</template>

<style>
.loader {
  text-align: center;
}
</style>
