"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Hero() {
  return (
    <section className="relative h-screen text-white isolate">
      {/* Background Swiper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="/assets/hero1.jpg"
            alt="Tech 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Tech 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground Text */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Upgrade Your Tech Life</h1>
          <p className="text-lg md:text-xl mb-6">
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