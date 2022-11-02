import { mande } from 'mande';
import { ref } from 'vue';
import { defineStore } from 'pinia';

import { STORE_API } from '@/lib/constants';
import type { IProduct } from '@/lib/types';

const api = mande(`${STORE_API}/products`);

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([]);

  async function fetchProducts() {
    try {
      products.value = await api.get('');
    } catch (error) {
      return error;
    }
  }

  return { products, fetchProducts };
});
