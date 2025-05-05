export const productsData: Record<
  string,
  Array<{ title: string; price: string; image: string; oldPrice?: string }>
> = {
  phones: [
    {
      title: "iPhone 14 Pro",
      price: "$999",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg",
    },
    {
      title: "Samsung Galaxy S22",
      price: "$849",
      image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-5g-1.jpg",
    },
    {
      title: "Google Pixel 7",
      price: "$599",
      image: "https://m.media-amazon.com/images/I/51f4A6Tr8zL._AC_SR1000,1000_.jpg",
    },
    {
      title: "OnePlus 10 Pro",
      price: "$899",
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg",
    },
    {
      title: "Xiaomi Mi 11",
      price: "$749",
      image: "https://images-cdn.ubuy.co.in/63b04c4f26f7ee36833ef202-xiaomi-mi-11-5g-128gb-8gb-ram-china.jpg",
    },
  ],
  laptops: [
    {
      title: "MacBook Air M2",
      price: "$1,199",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/46/2679312/2.jpg?4011",
    },
    {
      title: "Dell XPS 13",
      price: "$999",
      image: "https://m.media-amazon.com/images/I/710EGJBdIML._AC_SL1500_.jpg",
    },
    {
      title: "HP Spectre x360",
      price: "$1,299",
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08393284.png",
    },
    {
      title: "Lenovo ThinkPad X1 Carbon",
      price: "$1,499",
      image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTY0NzQ3fGltYWdlL3BuZ3xoYjAvaDg3LzE0MzE3NjYxNjYyNDMwLnBuZ3w1OGE1ZGIwYjA3YjE2YjI4ZGM1YjYxZTU3YjA2YjM2YjYzYjM1YjY5YjY4YzY0ZGMzYjU5YjU3YzQ4YjY0YjY3",
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
      image: "https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MTA3NDk3fGltYWdlL3BuZ3xoYjIvaDg3LzE0MzY1NjQxNzYyNTI2LnBuZ3w1YjU3YjYzZWI1YjY1YjY3N2Y3ZGU0ZDA1ZTU2ZDY1Y2Q2YzM1YjE1N2U4YjQ2YjYxYjYzZTYwYjNlY2I2YjE2",
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
