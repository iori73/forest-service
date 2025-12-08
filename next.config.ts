import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'iyashinomori.main.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.city.kaminoyama.yamagata.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.town.koumi.nagano.jp',
      },
      {
        protocol: 'https',
        hostname: 'nichigetsukurabu.com',
      },
      {
        protocol: 'https',
        hostname: 'www.resol-no-mori.com',
      },
      {
        protocol: 'https',
        hostname: 'www.innthepark.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.town.ikeda.fukui.jp',
      },
      {
        protocol: 'https',
        hostname: 'forest-adventure.jp',
      },
      {
        protocol: 'https',
        hostname: 't-forestry.com',
      },
      {
        protocol: 'https',
        hostname: 'fumotoppara.net',
      },
      {
        protocol: 'https',
        hostname: 'www.tokyu-resort.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.tdk-lambda.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.toppan.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'www.taiyo-life.co.jp',
      },
    ],
  },
};

export default nextConfig;
