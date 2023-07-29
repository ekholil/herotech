import Image from "next/image";
import React from "react";
import bannerImg from "@/images/banner.jpg";

const Banner = () => {
  return (
    <section className="container py-16 lg:py-24">
      <div className="grid grid-cols-2 gap-4 items-center">
        <div className="col-span-2 md:col-span-1">
          <span className="bg-green-300 inline-block text-sm p-2 rounded-full">
            Build Your Dream PC Today!
          </span>
          <h1 className="text-3xl md:text-5xl xl:text-6xl my-4 text-green-600">
            Build Your Custom PC with Our Online Configurator!
          </h1>
          <p className="text-gray-500">
            Empower Your Computing Journey - Build Your Perfect PC! Personalize,
            Assemble, Elevate Performance. Create an Ideal Rig Tailored to You.
            Unleash the Ultimate Power of Customization with Our Online PC
            Builder!
          </p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            className="w-full"
            width={600}
            height={450}
            src={bannerImg}
            alt="banner image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
