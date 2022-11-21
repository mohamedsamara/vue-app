<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useProductsStore } from '@/stores/products';
import ProductList from '@/components/Product/ProductList.vue';
import { Loader } from '@/components/Shared';

const productsStore = useProductsStore();
const loading = ref(true);

onMounted(() => {
  productsStore.fetchProducts().finally(() => {
    loading.value = false;
  });
});
</script>

<template>
  <main>
    <div class="shop container">
      <h2>Shop</h2>
      <Loader :loading="loading" text="Loading Products..." />
      <ProductList :products="productsStore.products" />
    </div>
  </main>
</template>

<style>
.shop {
  padding-bottom: 20px;
}
.shop h2 {
  text-align: center;
  font-weight: 600;
  margin-bottom: 12px;
}
</style>
