import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Phones
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/v/*/b/images/overview/hero/hero_static*',
      },
      {
        protocol: 'https',
        hostname: 'www.samsung.com',
        pathname: '/etc/designs/smg/global/imgs/support/cont/2022/galaxy-s22/galaxy-s22-hero.jpg',
      },
      {
        protocol: 'https',
        hostname: 'store.google.com',
        pathname: '/intl/en-us/product/pixel_7/images/pixel_7_hero.png',
      },
      {
        protocol: 'https',
        hostname: 'www.oneplus.com',
        pathname: '/content/dam/o2/oneplus-10-pro/oneplus-10-pro-hero.png',
      },
      {
        protocol: 'https',
        hostname: 'www.mi.com',
        pathname: '/global/img/mi11/mi11_hero.png',
      },
      // Laptops
      {
        protocol: 'https',
        hostname: 'www.apple.com',
        pathname: '/v/macbook-air-m2/b/images/overview/hero/hero_static*',
      },
      {
        protocol: 'https',
        hostname: 'www.dell.com',
        pathname: '/sites/csimages/Merchandizing_Imagery/all/xps-13-9305-laptop-hero.png',
      },
      {
        protocol: 'https',
        hostname: 'www.hp.com',
        pathname: '/us-en/shop/tech-takes/wp-content/uploads/2021/03/HP-Spectre-x360-14-Intel-11th-Gen-Processor-hero.png',
      },
      {
        protocol: 'https',
        hostname: 'www.lenovo.com',
        pathname: '/medias/lenovo-laptop-thinkpad-x1-carbon-gen-9-subseries-hero.png',
      },
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com',
        pathname: '/gain/8d8f7c9e-9d5e-4f1f-9b6b-3e5a5c3a4f7a/',
      },
      // Accessories
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        pathname: '/4668/as-images.apple.com/is/MWP22*',
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
        pathname: '/is/image/samsung/p6pim/levant/2208/gallery/levant-galaxy-watch5-44mm-sm-r910nzaamea*',
      },
      {
        protocol: 'https',
        hostname: 'resource.logitech.com',
        pathname: '/w_1200,h_630,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-top-view.png',
      },
      {
        protocol: 'https',
        hostname: 'cdn.anker.com',
        pathname: '/imagecatalog/product/2019/10004/anker-powercore-20000.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.sony.com',
        pathname: '/image/0e11748b2bb268a377f64c67a85e2bc4*',
      },
      // Deals
      {
        protocol: 'https',
        hostname: 'ssl-product-images.www8-hp.com',
        pathname: '/digmedialib/prodimg/lowres/c06574417.png',
      },
      {
        protocol: 'https',
        hostname: 'www.beatsbydre.com',
        pathname: '/content/dam/beats/web/product/headphones/studio3-wireless/global/Studio3-Black-1.png',
      },
      {
        protocol: 'https',
        hostname: 'www.lenovo.com',
        pathname: '/medias/lenovo-laptop-ideapad-3-15-intel-subseries-hero.png',
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com',
        pathname: '/is/image/samsung/p6pim/levant/galaxy-buds-pro-sm-r190nzkamea/gallery/levant-galaxy-buds-pro-sm-r190nzkamea*',
      },
      {
        protocol: 'https',
        hostname: 'i.dell.com',
        pathname: '/sites/imagecontent/products/PublishingImages/inspiron-15-5502-laptop/spi/ng/notebook-inspiron-15-5502-campaign-hero-504x350-ng.psd',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
