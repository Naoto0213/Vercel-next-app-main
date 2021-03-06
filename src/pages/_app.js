import "../../styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className="bg-gray-700 mh-screen">
        <Component {...pageProps} />
      </div>
    </UserProvider>
  );
}
