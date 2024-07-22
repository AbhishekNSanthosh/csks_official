import Banner from "@components/Banner";
import React from "react";

export default function LandingPageView() {
  return (
    <div className="relative overflow-hidden w-full h-[89vh]">
      <Banner />
      <div className="absolute inset-0 bg-black-100 opacity-50" />
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-black-100 bg-opacity-50 rounded-md p-8  flex flex-col items-center justify-center gap-4">
          <span className="text-5xl font-bold text-white">
            Belong Where Technology Innovators Thrive
          </span>
          <span className="text-xl text-white">
            Become part of the community of computing leaders driving the future
            of technology.
          </span>
        </div>
      </div>
    </div>
  );
}
