"use client";

import qs from "query-string";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { ReactElement } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

function Filter({ data, name, valueKey }: FilterProps): ReactElement {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();
  const router: AppRouterInstance = useRouter();

  const selectedValue: string | null = searchParams.get(valueKey);

  const onClick: (id: string) => void = (id: string): void => {
    const current: qs.ParsedQuery<string> = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url: string = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map(
          (filter: Size | Color): ReactElement => (
            <div
              key={filter.id}
              className="flex items-center"
            >
              <Button
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  selectedValue === filter.id && "bg-black text-white"
                )}
                onClick={(): void => onClick(filter.id)}
              >
                {filter.name}
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Filter;
