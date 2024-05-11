import { IProduct } from "@/shared/types/items.type";
import { create } from "zustand";

export type CartState = {
  items: IProduct[];
  quantity: number;
  add: (payload: IProduct) => void;
  remove: (payload: number) => void;
  removeAll: () => void;
  checkAllQty: () => void;
};

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  quantity: 0,
  add: (payload) =>
    set((state) => {
      const index = state.items.findIndex((it) => it.id === payload.id);
      console.log("index", index);

      // if (index !== -1) {
      //   const newItem = {
      //     ...state.items[index],
      //     qty: state.items[index].qty + 1,
      //   };
      //   return {
      //     items: [...state.items, newItem],
      //     quantity: state.items.length + 1,
      //   };
      // } else {
      //   return {
      //     items: [...state.items, { ...payload, qty: 1 }],
      //     quantity: state.items.length + 1,
      //   };
      // }

      if (index !== -1) {
        return {
          items: [...state.items],
        };
      } else {
        return {
          items: [...state.items, payload],
          // quantity: state.items.length,
        };
      }
    }),

  remove: (payload) => {
    console.log("remove", payload);
    set((state) => ({
      items: state.items.filter((it) => it.id !== payload),
      // quantity: state.items.length,
    }));
  },

  removeAll: () =>
    set(() => ({
      items: [],
      quantity: 0,
    })),

  checkAllQty: () =>
    set((state) => ({
      quantity: state.items.length,
    })),
}));
