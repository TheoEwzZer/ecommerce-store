import { HTMLAttributes, ReactElement } from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactElement {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-200", className)}
      {...props}
    />
  );
}

export default Skeleton;
