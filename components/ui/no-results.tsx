import { ReactElement } from "react";

function NoResults(): ReactElement {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-500">
      No results found.
    </div>
  );
}

export default NoResults;
