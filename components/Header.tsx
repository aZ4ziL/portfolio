"use client";

import fajriNoBG from "@/public/fajri-no-bg.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full relative h-[70vh] bg-white mt-2 rounded-md">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex items-center justify-center my-2">
          <Image
            src={fajriNoBG}
            alt="fajri"
            width={2000}
            height={800}
            className="w-40 h-40"
            placeholder="blur"
          />
        </div>
        <h1 className="text-3xl">
          Saya Fajri Fath <span className="text-sky-600">Full-stack</span> Developer
        </h1>
        <p className="text-sm font-extralight italic">
          Seseorang yang suka dengan dunia pemrograman karena dunia pemrograman ini sama dengan
          lika-liku kehidupan, harus dihadapi walaupun sering terjadi kesahalan.
        </p>
        <div className="flex items-center justify-center mt-2">
          <button className="flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white rounded-full px-5 py-2">
            <span>Memperkerjakan Saya</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
