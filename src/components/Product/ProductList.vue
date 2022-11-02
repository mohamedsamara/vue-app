<script setup lang="ts">
import ProductItem from './ProductItem.vue';
// import { IProduct } from '@/lib/types';

// export default {
//   props: {
//     products: IProduct<[]>,
//   },
// };

defineProps(['products']);
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
  grid-template-columns: repeat(3, 1fr);
}

.product-item-wrapper {
  margin: 10px;
}
</style>
