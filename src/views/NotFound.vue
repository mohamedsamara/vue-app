<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <main>
    <div class="not-found container">
      <h2>404</h2>
      <p>Sorry 😔 we couldn’t find what you were looking for.</p>
      <RouterLink to="/">Home</RouterLink>
    </div>
  </main>
</template>

<style>
.not-found {
  text-align: center;
}

.not-found p {
  margin: 16px 0px;
}

.not-found a {
  font-size: 14px;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  background-color: var(--color-background-soft);
}
</style>
