"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import { Typewriter } from 'react-simple-typewriter'; // Import the Typewriter component

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
          <SwiperSlide>
            <Image
              src="/assets/hero3.jpeg" // Image inside the 'public' folder
              alt="Tech 3"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/hero5.jpg"
              alt="Tech 5"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/hero4.jpg"
              alt="Tech 4"
              width={1000}
              height={600}
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <Typewriter
              words={['Upgrade Your Tech Life Now']}  // Text to type
              loop={1}  // How many times the text will be typed
              cursorStyle="_"  // Cursor style
              typeSpeed={100}  // Speed at which each character is typed
              deleteSpeed={50}  // Speed at which the text is deleted
              delaySpeed={1000}  // Delay before deleting the text
            />
          </h1>
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
