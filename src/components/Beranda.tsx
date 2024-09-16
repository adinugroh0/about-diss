"use client";

import Image from "next/image";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function Beranda() {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-[url('/back.png')] bg-cover bg-center flex 
       flex-col lg:flex-row sm:w-[40rem] rounded-xl  border items-center p-2 justify-between gap-11 group/card  dark:hover:shadow-2xl dark:bg-black dark:border-white/[0.2] border-black/[0.1] dark:hover:shadow-emerald-500/[0.1] ">
        <div className="w-full">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-black dark:text-white">
            Hello Septiaa👋
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300">
            Terima kasih sudah datang. hadiranmu membuat segalanya lebih berarti
            walau agak telat dan aku bersyukur kamu datang
          </CardItem>
        </div>
        <div className="w-full ">
          <CardItem translateZ="100" className=" ">
            <Image
              src="/septia.png"
              height="800"
              width="800"
              className="h-96 w-72
              object-cover rounded-xl group-hover/card:shadow-xl "
              alt="thumbnail"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Beranda;
