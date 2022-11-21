<script setup lang="ts">
import { computed } from 'vue';

import { useCartStore } from '@/stores/cart';
import CartList from '@/components/Cart/CartList.vue';

const cartStore = useCartStore();
const emptyCart = computed(() => (cartStore.cart.length === 0 ? true : false));
</script>

<template>
  <main>
    <div class="cart container">
      <h2>Cart</h2>
      <h4 v-if="emptyCart">Empty Cart</h4>
      <div v-else>
        <CartList :items="cartStore.cart" />
        <div class="total">
          <span>Total</span>
          <strong>{{ cartStore.total.toFixed(2) }}</strong>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.cart {
  padding-bottom: 20px;
}
.cart h2 {
  text-align: center;
  font-weight: 600;
  margin-bottom: 12px;
}
.cart h4 {
  text-align: center;
}

.total {
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
}

.total span {
  padding-right: 5px;
}
</style>
