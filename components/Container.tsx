"use client";

import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="px-2 md:px-4 lg:px-10 pb-20">{children}</div>;
}
