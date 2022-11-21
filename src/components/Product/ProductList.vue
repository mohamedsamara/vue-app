<script setup lang="ts">
import ProductItem from './ProductItem.vue';
import type { IProduct } from '@/lib/types';

defineProps<{
  products: IProduct[];
}>();
</script>

<template>
  <div class="product-list">
    <div
      v-for="product of products"
      :key="product.id"
      class="product-item-wrapper"
    >
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<style>
.product-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
@media (min-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 992px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .product-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
.product-item-wrapper {
  margin: 10px;
}
</style>
