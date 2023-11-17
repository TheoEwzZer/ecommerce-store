import { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
