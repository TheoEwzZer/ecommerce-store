"use client";

import { ReactElement, useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

function ModalProvider(): ReactElement | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
}

export default ModalProvider;
