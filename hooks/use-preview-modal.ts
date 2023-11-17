import { StoreApi, UseBoundStore, create } from "zustand";

import { Product } from "@/types";

export interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal: UseBoundStore<StoreApi<PreviewModalStore>> =
  create<PreviewModalStore>(
    (set: any): PreviewModalStore => ({
      isOpen: false,
      data: undefined,
      onOpen: (data: Product): void => set({ isOpen: true, data }),
      onClose: (): void => set({ isOpen: false }),
    })
  );

export default usePreviewModal;
