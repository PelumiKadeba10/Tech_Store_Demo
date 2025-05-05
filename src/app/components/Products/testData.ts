export const productsData: Record<
  string,
  Array<{ title: string; price: string; image: string; oldPrice?: string }>
> = {
  phones: [
    {
      title: "iPhone 14 Pro",
      price: "$999",
      image: "/assets/iphone14.jpeg",
    },
    {
      title: "Samsung Galaxy S22",
      price: "$849",
      image: "/assets/samsungs22.webp",
    },
    {
      title: "Google Pixel 7",
      price: "$599",
      image: "/assets/googlepixel7.jpg",
    },
    {
      title: "OnePlus 10 Pro",
      price: "$899",
      image: "/assets/oneplus.jpg",
    },
    {
      title: "Xiaomi Mi 11",
      price: "$749",
      image: "/assets/xiaomi.jpg",
    },
  ],
  laptops: [
    {
      title: "MacBook Air M2",
      price: "$1,199",
      image: "/assets/macbook.jpg",
    },
    {
      title: "Dell XPS 13",
      price: "$999",
      image: "/assets/dellxps.webp",
    },
    {
      title: "HP Spectre x360",
      price: "$1,299",
      image: "/assets/spectre.png",
    },
    {
      title: "Lenovo ThinkPad X1 Carbon",
      price: "$1,499",
      image: "/assets/thinkpad.jpeg",
    },
    {
      title: "Asus ZenBook 14",
      price: "$899",
      image: "/assets/asus.webp",
    },
  ],
  accessories: [
    {
      title: "AirPods Pro",
      price: "$249",
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg",
    },
    {
      title: "Samsung Galaxy Watch 5",
      price: "$299",
      image: "/assets/watch5.jpeg",
    },
    {
      title: "Logitech MX Master 3",
      price: "$99",
      image: "/assets/master3.jpeg",
    },
    {
      title: "Anker PowerCore 20000",
      price: "$65",
      image: "/assets/anker.jpg",
    },
    {
      title: "Sony WH-1000XM5",
      price: "$399",
      image: "/assets/sony wh.jpg",
    },
  ],
  deals: [
    {
      title: "HP Pavilion (Deal)",
      price: "$599",
      oldPrice: "$799",
      image: "/assets/pavillion.jpg",
    },
    {
      title: "Beats Studio 3 (Deal)",
      price: "$199",
      oldPrice: "$349",
      image: "/assets/beats.jpeg",
    },
    {
      title: "Lenovo IdeaPad 3 (Deal)",
      price: "$449",
      oldPrice: "$599",
      image: "/assets/ideapad.webp",
    },
    {
      title: "Samsung Galaxy Buds Pro (Deal)",
      price: "$129",
      oldPrice: "$199",
      image: "/assets/buds.jpeg",
    },
    {
      title: "Dell Inspiron 15 (Deal)",
      price: "$699",
      oldPrice: "$899",
      image: "/assets/inspiron.jpg",
    },
  ],
};
