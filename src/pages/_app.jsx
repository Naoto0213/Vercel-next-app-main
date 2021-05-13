import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
