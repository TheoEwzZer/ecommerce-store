interface ContainerProps {
  children: React.ReactNode;
}

import { ReactElement } from "react";

function Container({ children }: ContainerProps): ReactElement {
  return <div className="mx-auto max-w-7xl">{children}</div>;
}

export default Container;
