import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)'], // geistSans 폰트 정의
        'geist-mono': ['var(--font-geist-mono)'], // geistMono 폰트 정의
      },
    },
  },
  plugins: [],
};
export default config;
