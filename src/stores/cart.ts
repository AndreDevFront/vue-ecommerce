import type { CartDetail, Product } from '@/model/types';
import { useLocalStorage } from "@vueuse/core";
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: useLocalStorage<CartDetail[]>('cartDetails', [])
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;

      state.details.forEach(detail => {
        count += detail.quantity;
      });

      return count;
    },
    totalAmount: (state) => {
      let total = 0;
      
      state.details.forEach(d => {
        total += d.product.price * d.quantity;
      });

      return total;
    },
    whatsAppMessage(state) {
      let message = 'Olá, quero realizar a seguinte compra:\n\n';      
      
      message += '----------------------\n';      
      state.details.forEach(d => {
        message += `Produto: ${d.product.name}\n`;
        message += `Quantidade: ${d.quantity}\n`;
        message += `SubTotal: $${d.quantity * d.product.price}\n`;
        message += '----------------------\n';
      });

      message += `Total a pagar: $${this.totalAmount}\n\n`;
      message += `Muito obrigado! 😃`;

      return encodeURI(message);
    },
    whatsAppLink() {
      return 'https://api.whatsapp.com/send/?phone=51966XXXXXX&text=' + this.whatsAppMessage;
    }
  },
  actions: {
    addProduct(product: Product) {
      const detailFound = this.details.find(d => d.product.id === product.id);

      if (detailFound) {
          detailFound.quantity += 1;
      } else {
          this.details.push({
              product,
              quantity: 1
          });
      }
    },
    deleteProduct(productId: number) {
      const index = this.details.findIndex(d => d.product.id === productId);
      this.details.splice(index, 1);
    },
    increment(productId: number) {
      const detailFound = this.details.find(d => d.product.id === productId);
      
      if (detailFound) {
        detailFound.quantity += 1;
      }
    },
    decrement(productId: number) {
      const detailFound = this.details.find(d => d.product.id === productId);
      
      if (detailFound) {
        detailFound.quantity -= 1;

        if (detailFound.quantity === 0) {
          this.deleteProduct(productId);
        }
      }
    }
  },
})

