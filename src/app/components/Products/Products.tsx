"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PhoneCard from "./PhoneCard";
import LaptopCard from "./LaptopCard";
import AccessoryCard from "./AccessoryCard";
import DealCard from "./DealCard";
import { productsData } from "./testData";

// Define a Product interface to replace 'any'
interface Product {
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
  [key: string]: any; // Allow for other properties that might exist
}

// Define an interface for the productsData
interface ProductsData {
  [category: string]: Product[];
}

interface ProductsProps {
  category: string;
}

export default function Products({ category }: ProductsProps) {
  const products = productsData[category] || [];

  const getCard = (product: Product, index: number) => {
    const props = {
      title: product.title,
      price: product.price,
      image: product.image,
      oldPrice: product.oldPrice || "",
    };

    switch (category) {
      case "phones":
        return <PhoneCard key={index} {...props} />;
      case "laptops":
        return <LaptopCard key={index} {...props} />;
      case "accessories":
        return <AccessoryCard key={index} {...props} />;
      case "deals":
        return <DealCard key={index} {...props} />;
      default:
        return null;
    }
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-3 capitalize">{category}</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination]}
        className="w-full h-[400px]"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>{getCard(product, index)}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}