"use client"
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Image from "next/image"
function Hero() {
  const [searchValue, setSearchValue] = useState("");


  return (
    <div className="w-full min-h-[25rem] relative rounded-md overflow-hidden">
      <div className="w-full h-full overflow-hidden">
        <Image src={"/hero.png"} alt="Hero Image" fill className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full bg-transparent absolute top-0 left-0 p-5 grid grid-rows-[2fr_1fr]">
        <div></div>
        <div className="w-full flex flex-col items-start gap-3">
          <h2 className="text-3xl font-bold text-white">Guided mental health journeys</h2>
          <span className="text-white w-full md:w-[90%] inline-block">
            Explore our library of expert-led courses, meditations, and exercises to help you build healthier habits
          </span>
          <div className="my-4"></div>
          <div className="flex items-center bg-lightGrey p-2 rounded-md focus-within:outline focus-within:outline-blue w-full md:w-[60%]">
            <CiSearch size={"25"} />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for anything"
              className="bg-lightGrey w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
