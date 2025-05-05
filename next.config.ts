/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fdn2.gsmarena.com', // For phones
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com', // For phones
      },
      {
        protocol: 'https',
        hostname: 'images-cdn.ubuy.co.in', // For phones
      },
      {
        protocol: 'https',
        hostname: 'ng.jumia.is', // For laptops
      },
      {
        protocol: 'https',
        hostname: 'ssl-product-images.www8-hp.com', // For laptops and deals
      },
      {
        protocol: 'https',
        hostname: 'www.lenovo.com', // For laptops and deals
      },
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com', // For laptops
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com', // For accessories
      },
      {
        protocol: 'https',
        hostname: 'images.samsung.com', // For accessories and deals
      },
      {
        protocol: 'https',
        hostname: 'resource.logitech.com', // For accessories
      },
      {
        protocol: 'https',
        hostname: 'cdn.anker.com', // For accessories
      },
      {
        protocol: 'https',
        hostname: 'www.sony.com', // For accessories
      },
      {
        protocol: 'https',
        hostname: 'www.beatsbydre.com', // For deals
      },
      {
        protocol: 'https',
        hostname: 'i.dell.com', // For deals
      },
    ],
  },
};

export default nextConfig;
