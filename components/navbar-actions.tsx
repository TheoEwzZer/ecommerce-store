"use client";

import { ReactElement, useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

function NavbarActions(): ReactElement | null {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  const router: AppRouterInstance = useRouter();

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
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
}

export default NavbarActions;
