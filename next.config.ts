import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    // 支持的语言列表
    locales: ['en', 'zh'],
    // 默认语言
    defaultLocale: 'zh',
    // 是否自动检测用户语言
  },
};

export default nextConfig;
