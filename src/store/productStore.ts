import { create } from "zustand";

export interface Product {
  id: number;
  title: string;
  description: string;
  image?: string;
  liked: boolean;
}

interface ProductStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  toggleLike: (id: number) => void;
  updateProduct: (updated: Product) => void;
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id) =>
    set((state) => ({ products: state.products.filter(p => p.id !== id) })),
  toggleLike: (id) =>
    set((state) => ({
      products: state.products.map(p =>
        p.id === id ? { ...p, liked: !p.liked } : p
      )
    })),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map(p =>
        p.id === updated.id ? updated : p
      )
    })),
  setProducts: (products) => set({ products }),
}));