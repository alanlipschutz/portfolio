/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL: process.env.EMAIL,
    PHONE: process.env.PHONE,
  },
};

module.exports = nextConfig;
