"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[80%] mx-auto mt-6">
        <Hero />
        <Featured />
      </div>
    </>
  );
}
