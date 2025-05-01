import BaseProductCard from "./BaseProductCard";

interface DealCardProps {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
}

export default function DealCard(props: DealCardProps) {
  return <BaseProductCard {...props} />;
}
