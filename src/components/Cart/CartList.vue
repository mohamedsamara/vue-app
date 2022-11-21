<script setup lang="ts">
import type { ICartItem } from '@/lib/types';
import CartItem from './CartItem.vue';

defineProps<{
  items: ICartItem[];
}>();
</script>

<template>
  <div class="cart-list">
    <div v-for="item of items" :key="item.id" class="cart-item-wrapper">
      <CartItem :item="item" />
    </div>
  </div>
</template>

<style>
.cart-item-wrapper {
  flex: 100%;
}

@media (min-width: 992px) {
  .cart-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .cart-item-wrapper {
    flex: 50%;
  }
}
</style>
