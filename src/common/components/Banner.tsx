import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <Image
      src={"/banner1.png"}
      width={2000}
      height={2000}
      alt=""
      className="absolute inset-0 w-full object-contain"
    />
  );
}
