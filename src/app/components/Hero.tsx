"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";

export default function Hero() {
  return (
    <section className="relative h-screen text-white isolate">
      {/* Background Swiper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {/* <SwiperSlide>
        <Image
          src="/assets/hero1.jpg" // Image inside the 'public' folder
          alt="Tech 1"
          width={1000} // Optional: set width
          height={600} // Optional: set height
          className="w-full h-full object-cover"
        />
        </SwiperSlide> */}
      <SwiperSlide>
        <Image
          src="/assets/hero3.jpeg" // Image inside the 'public' folder
          alt="Tech 3"
          width={1000} // Optional: set width
          height={600} // Optional: set height
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/hero5.jpg" // Image inside the 'public' folder
          alt="Tech 5"
          width={1000} // Optional: set width
          height={600} // Optional: set height
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/hero4.jpg" // Image inside the 'public' folder
          alt="Tech 4"
          width={1000} // Optional: set width
          height={600} // Optional: set height
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      </Swiper>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-10" />

      {/* Foreground Text */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Upgrade Your Tech Life Now</h1>
          <p className="text-lg md:text-xl mb-12">
            Discover the latest gadgets, laptops, and accessories at unbeatable prices.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#phones"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md"
            >
              Shop Now
            </a>
            <a
              href="#deals"
              className="bg-white text-black hover:bg-gray-200 font-semibold py-3 px-6 rounded-md"
            >
              View Deals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}