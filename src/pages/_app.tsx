import type { AppProps } from "next/app";
import "@/styles/globals.css"; // ✅ Move global styles here

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

