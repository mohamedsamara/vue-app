<script setup lang="ts">
import type { IProduct } from '@/lib/types';
import { Button } from '@/components/Shared';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

defineProps<{
  product: IProduct;
}>();

const addToCart = (product: IProduct) => {
  cartStore.addToCart(product);
};
</script>

<template>
  <div class="product-item">
    <img :src="product.image" alt="product.title" />
    <h3 class="text-ellipsis">
      {{ product.title }}
    </h3>
    <p class="text-ellipsis">
      {{ product.description }}
    </p>
    <div class="price">${{ product.price }}</div>
    <div class="add-to-cart">
      <Button kind="primary" @click="addToCart(product)">Add To Cart</Button>
    </div>
  </div>
</template>

<style>
.product-item {
  padding: 16px;
  border: 1px solid var(--color-border);
  cursor: pointer;
}

.product-item img {
  max-width: 100%;
  height: 320px;
  width: 100%;
  object-fit: contain;
  margin-left: 0px;
}

.product-item .text-ellipsis {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-item .price {
  font-weight: 600;
  font-size: 1.5rem;
}

.product-item .add-to-cart {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  transition: all 0.3s;
  background-color: #ffffffb0;
  padding: 10px;
}

.product-item:hover .add-to-cart {
  visibility: visible;
  opacity: 1;
}
</style>
