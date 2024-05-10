import { create } from "zustand";
import { cart } from "./slices/cart";

export const useBoundStore = create((...a) => ({
  ...cart(...a),
}));
