<script setup lang="ts">
defineProps(['product']);
</script>

<template>
  <div class="product-item">
    <img :src="product.image" alt="product.title" />
    <h3>
      {{ product.title }}
    </h3>
    <p>
      {{ product.description }}
    </p>

    <div>{{ product.price }}</div>
  </div>
</template>

<style>
.product-item {
  padding: 16px;
  border: 1px solid var(--color-border);
}

.product-item img {
  max-width: 100%;
}
</style>
