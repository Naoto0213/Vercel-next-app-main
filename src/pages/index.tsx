import HeaderNav from "../components/organisms/HeaderNav/HeaderNav";
import TopPage from "./TopPage";
import Head from "next/head";
export default function Home() {
  return (
    <div className="bg-gray-700 h-full">
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <HeaderNav />
      <TopPage />
    </div>
  );
}
