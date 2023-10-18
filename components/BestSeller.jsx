"use client";

import React from "react";
import { useState } from "react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

const BestSeller = () => {
  return (
    <section className="mx-auto relative flex justify-center px-10 sm:px-16 xl:px-0 py-10 flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[26px] border-b-2 font-medium">
          New Arrivals
        </h1>
      </div>

      <div className=" w-full flex flex-wrap justify-center items-center gap-20 gap-y-10 mx-auto mt-10">
        {newProducts.map((product) => (
          <NewArrivals product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;