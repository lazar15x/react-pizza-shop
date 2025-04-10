import { IProduct } from '@/shared/types/items.type';
import { create } from 'zustand';

export interface CartState {
  items: IProduct[];
  quantity: number;
  add: (payload: IProduct) => void;
  remove: (payload: number) => void;
  removeAll: () => void;
  checkAllQty: () => void;
}

export const useCartStore = create<CartState>()(set => ({
  items: [],
  quantity: 0,
  add: payload =>
    set(state => {
      const index = state.items.findIndex(it => it.id === payload.id);
      console.log('index', index);

      if (index !== -1) {
        return {
          items: [...state.items],
        };
      } else {
        return {
          items: [...state.items, payload],
        };
      }
    }),

  remove: payload => {
    console.log('remove', payload);
    set(state => ({
      items: state.items.filter(it => it.id !== payload),
    }));
  },

  removeAll: () =>
    set(() => ({
      items: [],
      quantity: 0,
    })),

  checkAllQty: () =>
    set(state => ({
      quantity: state.items.length,
    })),
}));
