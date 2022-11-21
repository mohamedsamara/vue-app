import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { IProduct, ICartItem } from '@/lib/types';
import { CART_STORAGE } from '@/lib/constants';

export const useCartStore = defineStore('cart', () => {
  const cartStorage = JSON.parse(localStorage.getItem(CART_STORAGE) as string);
  const cart = ref<ICartItem[]>(cartStorage);

  const addToCart = (product: IProduct) => {
    const exist = cart.value.find((p) => p.id === product.id);

    if (exist) {
      exist.quantity = exist.quantity + 1;
    } else {
      cart.value.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(CART_STORAGE, JSON.stringify(cart.value));
  };

  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((p) => p.id !== id);
    localStorage.setItem(CART_STORAGE, JSON.stringify(cart.value));
  };

  const total = computed(() =>
    cart.value.reduce((acc, curr) => {
      return acc + curr.quantity * curr.price;
    }, 0),
  );

  return { cart, total, addToCart, removeFromCart };
});
