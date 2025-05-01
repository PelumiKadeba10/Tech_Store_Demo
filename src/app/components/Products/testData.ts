export const productsData: Record<
  string,
  Array<{ title: string; price: string; image: string; oldPrice?: string }>
> = {
    phones : [
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
        image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-7-1.jpg",
      },
      {
        title: "OnePlus 10 Pro",
        price: "$899",
        image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg",
      },
      {
        title: "Xiaomi Mi 11",
        price: "$749",
        image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-11-1.jpg",
      },
      {
        title: "Sony Xperia 1 III",
        price: "$1,199",
        image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iii-1.jpg",
      },
      {
        title: "Huawei P50 Pro",
        price: "$1,099",
        image: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-pro-1.jpg",
      },
      {
        title: "Motorola Edge 20 Pro",
        price: "$699",
        image: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-edge-20-pro-1.jpg",
      },
      {
        title: "Nokia 8.3 5G",
        price: "$699",
        image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-8-3-5g-1.jpg",
      },
      {
        title: "Asus ROG Phone 5",
        price: "$999",
        image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-5-1.jpg",
      },
      {
        title: "Realme GT 5G",
        price: "$599",
        image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-gt-5g-1.jpg",
      },
      {
        title: "Oppo Find X3 Pro",
        price: "$1,149",
        image: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-1.jpg",
      },
    ],
    laptops: [
      {
        title: "MacBook Air M2",
        price: "$1,199",
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-macbook-air-m2-1.jpg",
      },
      {
        title: "Dell XPS 13",
        price: "$999",
        image: "https://fdn2.gsmarena.com/vv/pics/dell/dell-xps-13-2024-1.jpg",
      },
      {
        title: "HP Spectre x360",
        price: "$1,299",
        image: "https://fdn2.gsmarena.com/vv/pics/hp/hp-spectre-x360-1.jpg",
      },
      {
        title: "Lenovo ThinkPad X1 Carbon",
        price: "$1,499",
        image: "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-thinkpad-x1-carbon-1.jpg",
      },
      {
        title: "Asus ZenBook 14",
        price: "$899",
        image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-zenbook-14-1.jpg",
      },
      {
        title: "Microsoft Surface Laptop 5",
        price: "$1,099",
        image: "https://fdn2.gsmarena.com/vv/pics/microsoft/microsoft-surface-laptop-5-1.jpg",
      },
      {
        title: "Acer Swift 5",
        price: "$999",
        image: "https://fdn2.gsmarena.com/vv/pics/acer/acer-swift-5-1.jpg",
      },
      {
        title: "Razer Blade 15",
        price: "$1,799",
        image: "https://fdn2.gsmarena.com/vv/pics/razer/razer-blade-15-1.jpg",
      },
      {
        title: "LG Gram 17",
        price: "$1,599",
        image: "https://fdn2.gsmarena.com/vv/pics/lg/lg-gram-17-1.jpg",
      },
      {
        title: "Dell Inspiron 14 Plus",
        price: "$849",
        image: "https://fdn2.gsmarena.com/vv/pics/dell/dell-inspiron-14-plus-1.jpg",
      },
    ], 
  
    accessories : [
    {
      title: "AirPods Pro",
      price: "$249",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-airpods-pro-1.jpg",
    },
    {
      title: "Anker Power Bank",
      price: "$59",
      image: "https://fdn2.gsmarena.com/vv/pics/anker/anker-power-bank-1.jpg",
    },
    {
      title: "Logitech MX Master 3",
      price: "$99",
      image: "https://fdn2.gsmarena.com/vv/pics/logitech/logitech-mx-master-3-1.jpg",
    },
    {
      title: "Samsung T7 Portable SSD",
      price: "$139",
      image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-t7-ssd-1.jpg",
    },
    {
      title: "Sony WH-1000XM4 Headphones",
      price: "$349",
      image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-wh-1000xm4-1.jpg",
    },
    {
      title: "Apple Magic Keyboard",
      price: "$99",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-magic-keyboard-1.jpg",
    },
    {
      title: "Dell UltraSharp Monitor",
      price: "$499",
      image: "https://fdn2.gsmarena.com/vv/pics/dell/dell-ultrasharp-monitor-1.jpg",
    },
    {
      title: "HP USB-C Docking Station",
      price: "$149",
      image: "https://fdn2.gsmarena.com/vv/pics/hp/hp-usb-c-docking-station-1.jpg",
    },
    {
      title: "Amazon Echo Dot (4th Gen)",
      price: "$49",
      image: "https://fdn2.gsmarena.com/vv/pics/amazon/amazon-echo-dot-4th-gen-1.jpg",
    },
    {
      title: "Google Nest Hub",
      price: "$89",
      image: "https://fdn2.gsmarena.com/vv/pics/google/google-nest-hub-1.jpg",
    },
    ],
  
    deals: [
    {
      title: "HP Pavilion (Deal)",
      price: "$599",
      oldPrice: "$799",
      image: "https://fdn2.gsmarena.com/vv/pics/hp/hp-pavilion-deal-1.jpg",
    },
    {
      title: "Beats Studio 3 (Deal)",
      price: "$199",
      oldPrice: "$349",
      image: "https://fdn2.gsmarena.com/vv/pics/beats/beats-studio-3-deal-1.jpg",
    },
    {
      title: "Lenovo IdeaPad 3 (Deal)",
      price: "$449",
      oldPrice: "$599",
      image: "https://fdn2.gsmarena.com/vv/pics/lenovo/lenovo-ideapad-3-deal-1.jpg",
    },
    {
      title: "Samsung Galaxy Buds Pro (Deal)",
      price: "$129",
      oldPrice: "$199",
      image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-buds-pro-deal-1.jpg",
    },
    {
      title: "Dell Inspiron 15 (Deal)",
      price: "$699",
      oldPrice: "$899",
      image: "https://fdn2.gsmarena.com/vv/pics/dell/dell-inspiron-15-deal-1.jpg",
    },
    {
      title: "Apple Watch Series 7 (Deal)",
      price: "$379",
      oldPrice: "$499",
      image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-watch-series-7-deal-1.jpg",
    },
    {
      title: "Asus ROG Strix G15 (Deal)",
      price: "$1,099",
      oldPrice: "$1,399",
      image: "https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-strix-g15-deal-1.jpg",
    },
    {
      title: "Sony WF-1000XM4 Earbuds (Deal)",
      price: "$179",
      oldPrice: "$279",
      image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-wf-1000xm4-deal-1.jpg",
    },
    {
      title: "Microsoft Surface Pro 7 (Deal)",
      price: "$749",
      oldPrice: "$999",
      image: "https://fdn2.gsmarena.com/vv/pics/microsoft/microsoft-surface-pro-7-deal-1.jpg",
    },
    {
      title: "JBL Flip 5 Speaker (Deal)",
      price: "$89",
      oldPrice: "$119",
      image: "https://fdn2.gsmarena.com/vv/pics/jbl/jbl-flip-5-deal-1.jpg",
    },
  ]
  };