<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <div class="home container">
      <RouterLink to="/shop">View Products</RouterLink>
    </div>
  </main>
</template>

<style>
.home {
  text-align: center;
}

.home a {
  font-size: 14px;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  background-color: var(--color-background-soft);
}
</style>
