"use client";

import { ReactElement, useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import Button from "@/components/ui/button";
import useCart, { CartStore } from "@/hooks/use-cart";

function NavbarActions(): ReactElement | null {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  const router: AppRouterInstance = useRouter();
  const cart: CartStore = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={(): void => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
}

export default NavbarActions;
