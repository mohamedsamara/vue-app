<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="95"
      height="60"
    />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 2rem 0.5rem;
}

.logo {
  display: block;
  margin: auto;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--vt-c-primary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-size: 14px;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
