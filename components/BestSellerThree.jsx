"use client";

import React from "react";
import { useState } from "react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

const BestSellerThree = () => {
  return (
    <section className="max-w-[1440px] mx-auto relative flex justify-center px-10 sm:px-16 xl:px-0 py-10 flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[26px] border-b-2 font-medium">
          Shop
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20 gap-y-10 mx-auto mt-10">
        {eyeProducts.map((product) => (
          <EyeGlasses product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSellerThree;