import Logo from "@components/Logo";
import { menuItems, otherLinks } from "@utils/constants";
import Menu from "@widgets/Header/components/Menu";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="px-[5vw] py-8 rounded-md flex w-full flex-col gap-8 border-t-[1px] border-t-primary-200">
      <div className="flex w-full">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="">
            <span className="text-gray-900 font-medium">Usefull links</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            {menuItems?.map((item, index) => (
              <div className="flex capitalize" key={`${item?.title}_${index}`}>
                <Link href={item?.url} className="text-gray-700">
                  {item?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="">
            <span className="text-gray-900 font-medium">Other links</span>
          </div>
          <div className="w-full flex flex-col gap-1">
            {otherLinks?.map((item, index) => (
              <div className="flex capitalize" key={`${item?.title}_${index}`}>
                <Link href={item?.url} className="text-gray-700">
                  {item?.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary-200"></div>
      <div className="w-full flex flex-row items-center justify-between">
        <span className="">Copyright © 2024. All rights reserved.</span>
        <span className="">
          Crafted with ❤️ by <span className="font-semibold text-primary-400">IEEE CSKS</span>
        </span>
      </div>
    </div>
  );
}
