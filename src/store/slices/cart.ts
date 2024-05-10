export interface ICartProps {
  id: number;
  name: string;
  desc: string;
  img: string;
  price: number;
}

export type CartState = {
  items: ICartProps[];
  quantity: number;
};

export const cart = (set) => ({
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
      items: state.items.filter((it: ICartProps) => it.id !== payload),
      // quantity: state.items.length,
    }));
  },

  removeAll: () =>
    set((state) => ({
      items: [],
      quantity: 0,
    })),

  checkAllQty: () =>
    set((state) => ({
      quantity: state.items.length,
    })),
});
