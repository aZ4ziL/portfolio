"use client";

import { faDesktop, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Service() {
  return (
    <div className="pt-[80px]">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">Layanan Saya</h1>
        <p className="text-sm font-extralight text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam.
        </p>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-md text-center flex flex-col gap-3 p-5 hover:scale-105 transition-all ease-in duration-200">
          <FontAwesomeIcon icon={faDesktop} size="4x" />
          <h5 className="text-xl font-bold">Web Developer</h5>
          <span className="text-xs font-extralight">Blog, E-Commerce</span>
        </div>
        <div className="bg-white rounded-md text-center flex flex-col gap-3 p-5 hover:scale-105 transition-all ease-in duration-200">
          <div className="flex items-center justify-center">
            <Image src="/rest-api-icon.svg" alt="Rest API" width={80} height={80} />
          </div>
          <h5 className="text-xl font-bold">Rest API</h5>
          <span className="text-xs font-extralight">JSON Webtoken, Authentication</span>
        </div>
        <div className="bg-white rounded-md text-center flex flex-col gap-3 p-5 hover:scale-105 transition-all ease-in duration-200">
          <FontAwesomeIcon icon={faMicrophone} size="4x" />
          <h5 className="text-xl font-bold">Komunikasi</h5>
          <span className="text-xs font-extralight"></span>
        </div>
      </div>
    </div>
  );
}
