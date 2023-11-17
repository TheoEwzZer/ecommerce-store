"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

interface Route {
  href: string;
  label: string;
  active: boolean;
}

function MainNav({ data }: MainNavProps): ReactElement {
  const pathname: string = usePathname();

  const routes: Route[] = data.map(
    (route: Category): Route => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    })
  );

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map(
        (route: Route): ReactElement => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        )
      )}
    </nav>
  );
}

export default MainNav;
