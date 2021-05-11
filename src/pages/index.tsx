import HeaderNav from "../component/molecules/HeaderNav";
import Image from "next/image";
import TopPageMain from "../component/organisms/FirstPage/TopPageMain";
export default function Home() {
  return (
    <div className="bg-gray-700 h-screen">
      <HeaderNav />
      <TopPageMain />
    </div>
  );
}
