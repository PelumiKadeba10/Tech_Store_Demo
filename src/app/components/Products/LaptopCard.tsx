import BaseProductCard from "./BaseProductCard";

interface LaptopCardProps {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
}

export default function LaptopCard(props: LaptopCardProps) {
  return <BaseProductCard {...props} />;
}
