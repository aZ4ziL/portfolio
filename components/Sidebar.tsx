"use client";

import fajriImage from "@/public/fajri.jpg";
import { faFacebook, faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faBars,
  faCakeCandles,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

interface Props {
  children?: React.ReactNode;
}

export default function Sidebar({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="md:flex">
      <div className="fixed md:hidden z-30 top-2 left-2">
        <button
          className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-500 text-white"
          onClick={() => setShowSidebar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        className={`w-full mb-12 md:mb-0 md:w-[300px] min-h-screen fixed md:static top-0 ${
          showSidebar ? "left-0 opacity-100 visible" : "-left-[300px] opacity-0 invisible"
        } md:visible md:opacity-100 z-50 bg-white dark:bg-gray-900 border-r border-r-gray-300 dark:border-r-gray-600 transition-all duration-300 ease-in`}
      >
        <div className="md:hidden absolute top-2 right-2">
          <button
            className="w-10 h-10 rounded-full bg-sky-600 hover:bg-sky-500 text-white"
            onClick={() => setShowSidebar(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        {/* sidebar header */}
        <div className="flex flex-col items-center justify-center py-4 pb-4 border-b border-b-gray-300 dark:border-gray-600">
          <Image
            src={fajriImage}
            alt="Fajri Fath"
            width={2000}
            height={800}
            className="rounded-full w-32 h-32"
            placeholder="blur"
          />
          <h1 className="text-xl capitalize font-light text-gray-600 mt-4">Fajri Fath</h1>
          <span className="text-sm font-extralight italic text-gray-500">Fullstack Developer</span>
          {/* Social media */}
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/fajhrinazgul" legacyBehavior>
              <a className="text-xl text-sky-600" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/fajhri_fath" legacyBehavior>
              <a className="text-xl text-sky-600" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Link>
            <Link href="https://www.github.com/aZ4ziL" legacyBehavior>
              <a className="text-xl text-sky-600" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href="https://www.youtube.com/" legacyBehavior>
              <a className="text-xl text-sky-600" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
          </div>
        </div>
        <div className="overflow-auto h-[500px] md:h-full">
          {/* Info */}
          <div className="flex flex-col gap-4 p-4 mt-2 pb-4 border-b border-b-gray-300 dark:border-b-gray-600">
            <div className="flex items-center justify-between">
              <FontAwesomeIcon icon={faCakeCandles} className="text-xl text-sky-600" />
              <span className="dark:text-white italic font-extralight text-xs">14-03-1999</span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <FontAwesomeIcon icon={faAddressBook} className="text-xl text-sky-600" />
              <span className="dark:text-white italic font-extralight text-xs text-end">
                Guguak, Kec 2 X 11 Kayutanam, Kabupaten Padang Pariaman [25585]
              </span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <FontAwesomeIcon icon={faPhone} className="text-xl text-sky-600" />
              <span className="dark:text-white italic font-extralight text-xs text-end">
                089522195957
              </span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl text-sky-600" />
              <span className="dark:text-white italic font-extralight text-xs text-end">
                fathfajhri40@gmail.com
              </span>
            </div>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-4 p-4 mt-2 pb-4 border-b border-b-gray-300 dark:border-b-gray-600">
            <span className="text-lg font-bold uppercase">SKILLS</span>
            {/* HTML */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">Html</span>
                <span className="text-xs">95%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[95%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* CSS */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">CSS</span>
                <span className="text-xs">80%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[80%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* JS */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">CSS</span>
                <span className="text-xs">80%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[80%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* Golang */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">Golang</span>
                <span className="text-xs">90%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[90%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* React */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">React / Next.JS</span>
                <span className="text-xs">85%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[85%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* PHP */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">PHP</span>
                <span className="text-xs">50%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[50%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
            {/* Python */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-xs">Python</span>
                <span className="text-xs">65%</span>
              </div>
              <div className="w-full h-3 border border-sky-600 rounded-full">
                <div className="w-[65%] h-full bg-sky-600 rounded-s-full"></div>
              </div>
            </div>
          </div>
          <div className="p-4 mt-2 pb-4">
            <span className="text-sky-600 text-sm uppercase">
              Berkeinginan untuk mempelajari hal baru
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Container>{children}</Container>
      </div>
    </div>
  );
}
