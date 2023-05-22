import { useEffect } from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";
// import * as gtag from "../lib/gtag"; // Replace with your own Google Analytics tracking code if applicable
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // gtag.pageview(url); // Replace with your own Google Analytics tracking function if applicable
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
