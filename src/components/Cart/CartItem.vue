<script setup lang="ts">
import type { ICartItem } from '@/lib/types';
import { Button } from '@/components/Shared';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();

defineProps<{
  item: ICartItem;
}>();

const removeFromCart = (id: number) => {
  cartStore.removeFromCart(id);
};
</script>

<template>
  <div class="cart-item">
    <img :src="item.image" alt="product.title" />
    <div class="item-content">
      <h3 class="text-ellipsis">
        {{ item.title }}
      </h3>
      <div class="price">${{ item.price }}</div>
      <div class="quantity">Quantity: {{ item.quantity }}</div>
      <div class="remove-from-cart">
        <Button
          kind="primary"
          :full-width="false"
          @click="removeFromCart(item.id)"
          >Remove</Button
        >
      </div>
    </div>
  </div>
</template>

<style>
.cart-item {
  display: flex;
  padding: 16px;
}

.cart-item img {
  max-width: 100px;
  min-width: 100px;
  height: 100px;
  object-fit: contain;
}

.cart-item .item-content {
  padding-left: 12px;
}

.cart-item .price {
  font-weight: 600;
  font-size: 1.1rem;
  margin: 10px 0px;
}

.cart-item .quantity {
  margin: 10px 0px;
}

.cart-item .text-ellipsis {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
