import BaseProductCard from "./BaseProductCard";

interface PhoneCardProps {
  title: string;
  price: string;
  image: string;
}

export default function PhoneCard(props: PhoneCardProps) {
  return <BaseProductCard {...props} />;
}
