export const productsData: Record<
  string,
  Array<{ title: string; price: string; image: string; oldPrice?: string }>
> = {
  phones: [
    {
      title: "iPhone 14 Pro",
      price: "$999",
      image: "https://www.apple.com/v/iphone-14-pro/b/images/overview/hero/hero_static__d4q2z6w5v5yi_large.jpg",
    },
    {
      title: "Samsung Galaxy S22",
      price: "$849",
      image: "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/2022/galaxy-s22/galaxy-s22-hero.jpg",
    },
    {
      title: "Google Pixel 7",
      price: "$599",
      image: "https://store.google.com/intl/en-us/product/pixel_7/images/pixel_7_hero.png",
    },
    {
      title: "OnePlus 10 Pro",
      price: "$899",
      image: "https://www.oneplus.com/content/dam/o2/oneplus-10-pro/oneplus-10-pro-hero.png",
    },
    {
      title: "Xiaomi Mi 11",
      price: "$749",
      image: "https://www.mi.com/global/img/mi11/mi11_hero.png",
    },
  ],
  laptops: [
    {
      title: "MacBook Air M2",
      price: "$1,199",
      image: "https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_static__d4q2z6w5v5yi_large.jpg",
    },
    {
      title: "Dell XPS 13",
      price: "$999",
      image: "https://www.dell.com/sites/csimages/Merchandizing_Imagery/all/xps-13-9305-laptop-hero.png",
    },
    {
      title: "HP Spectre x360",
      price: "$1,299",
      image: "https://www.hp.com/us-en/shop/tech-takes/wp-content/uploads/2021/03/HP-Spectre-x360-14-Intel-11th-Gen-Processor-hero.png",
    },
    {
      title: "Lenovo ThinkPad X1 Carbon",
      price: "$1,499",
      image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-subseries-hero.png",
    },
    {
      title: "Asus ZenBook 14",
      price: "$899",
      image: "https://dlcdnwebimgs.asus.com/gain/8d8f7c9e-9d5e-4f1f-9b6b-3e5a5c3a4f7a/",
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
      image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2208/gallery/levant-galaxy-watch5-44mm-sm-r910nzaamea-533591234",
    },
    {
      title: "Logitech MX Master 3",
      price: "$99",
      image: "https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-top-view.png",
    },
    {
      title: "Anker PowerCore 20000",
      price: "$65",
      image: "https://cdn.anker.com/imagecatalog/product/2019/10004/anker-powercore-20000.jpg",
    },
    {
      title: "Sony WH-1000XM5",
      price: "$399",
      image: "https://www.sony.com/image/0e11748b2bb268a377f64c67a85e2bc4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    },
  ],
  deals: [
    {
      title: "HP Pavilion (Deal)",
      price: "$599",
      oldPrice: "$799",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06574417.png",
    },
    {
      title: "Beats Studio 3 (Deal)",
      price: "$199",
      oldPrice: "$349",
      image: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/global/Studio3-Black-1.png",
    },
    {
      title: "Lenovo IdeaPad 3 (Deal)",
      price: "$449",
      oldPrice: "$599",
      image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-subseries-hero.png",
    },
    {
      title: "Samsung Galaxy Buds Pro (Deal)",
      price: "$129",
      oldPrice: "$199",
      image: "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-buds-pro-sm-r190nzkamea/gallery/levant-galaxy-buds-pro-sm-r190nzkamea-368303-sm-r190nzkamea-368303-01-frontblack-368303?$720_576_PNG$",
    },
    {
      title: "Dell Inspiron 15 (Deal)",
      price: "$699",
      oldPrice: "$899",
      image: "https://i.dell.com/sites/imagecontent/products/PublishingImages/inspiron-15-5502-laptop/spi/ng/notebook-inspiron-15-5502-campaign-hero-504x350-ng.psd",
    },
  ],
};
