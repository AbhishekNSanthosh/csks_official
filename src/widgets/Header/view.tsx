import Logo from "@components/Logo";
import React from "react";
import Menu from "./components/Menu";
import Button from "@components/Button";

export default function Header() {
  return (
    <div className="w-full fixed px-[5vw] py-[1.5rem] z-10 backdrop-blur-md bg-white">
      <div className="flex w-full">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-2 flex items-center justify-center">
         <Menu/>
        </div>
        <div className="flex-1 flex items-center justify-end">
         <Button className="bg-primary-400 flex text-white px-3 py-2 rounded-md" title="Join Whatsapp Channel"/>
        </div>
      </div>
    </div>
  );
}
