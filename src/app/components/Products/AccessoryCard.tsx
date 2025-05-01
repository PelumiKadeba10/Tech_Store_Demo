import BaseProductCard from "./BaseProductCard";

interface AccessoryCardProps {
  title: string;
  price: string;
  oldPrice: string;
  image: string;
}

export default function AccessoryCard(props: AccessoryCardProps) {
  return <BaseProductCard {...props} />;
}
