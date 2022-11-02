<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/products';

import ProductList from '@/components/Product/ProductList.vue';

const productsStore = useProductsStore();

onMounted(() => {
  console.log('mounted');
  productsStore.fetchProducts();
});
</script>

<template>
  <main>
    <div class="home">
      <h2>Shop</h2>

      <ProductList :products="productsStore.products" />
    </div>
  </main>
</template>

<style>
.home h2 {
  text-align: center;
}
</style>
