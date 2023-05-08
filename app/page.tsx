"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isRedirect, setIsRedirect] = useState<boolean>(false);

  if (isRedirect) {
    redirect("/portfolio");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsRedirect(true);
    }, 2000);
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[70%] lg:w-[50%]">
      <h1 className="text-3xl dark:text-white font-semibold uppercase">
        Selamat Datang Di Portfolio
      </h1>
      <p className="italic font-extralight">Anda akan dialihkan ke halaman utama.</p>
    </div>
  );
}
