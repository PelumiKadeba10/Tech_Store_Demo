'use client';

import { FaShoppingCart } from "react-icons/fa";
import { useToast } from "../../../hooks/useToast";
import Image from 'next/image';

interface BaseProductCardProps {
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
}

export default function BaseProductCard({
  title,
  price,
  image,
  oldPrice,
}: BaseProductCardProps) {
  const { showToast } = useToast();

  const handleAddToCart = () => {
    showToast(`${title} added to cart!`, "success");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition w-full max-w-sm mx-auto">
      <div className="relative h-48 mb-3 ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="mb-3">
        {oldPrice ? (
          <div className="flex items-center gap-2">
            <span className="line-through text-gray-400">{oldPrice}</span>
            <span className="text-green-600 font-bold">{price}</span>
          </div>
        ) : (
          <span className="font-bold">{price}</span>
        )}
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}