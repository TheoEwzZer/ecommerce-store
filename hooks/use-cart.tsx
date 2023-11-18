import { toast } from "react-hot-toast";
import { UseBoundStore, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

export interface CartStore {
  items: Product[];
  addItem: (data: Product) => string | undefined;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart: UseBoundStore<any> = create(
  persist<CartStore>(
    (set: any, get: () => CartStore): CartStore => ({
      items: [],
      addItem: (data: Product): string | undefined => {
        const currentItems: Product[] = get().items;
        const existingItem: Product | undefined = currentItems.find(
          (item: Product): boolean => item.id === data.id
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string): void => {
        set({
          items: [...get().items.filter((item: Product): boolean => item.id !== id)],
        });
        toast.success("Item removed from cart.");
      },
      removeAll: (): void => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage((): Storage => localStorage),
    }
  )
);

export default useCart;
