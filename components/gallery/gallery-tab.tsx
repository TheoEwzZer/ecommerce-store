import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";
import { ReactElement } from "react";

interface GalleryTabProps {
  image: Image;
}

interface TabRenderPropArg {
  selected: boolean;
}

function GalleryTab({ image }: GalleryTabProps): ReactElement {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }: TabRenderPropArg): ReactElement => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
}

export default GalleryTab;
