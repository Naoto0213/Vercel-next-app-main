import HeaderNav from "../components/organisms/HeaderNav/HeaderNav";
import TopPage from "./TopPage";
export default function Home() {
  return (
    <div className="bg-gray-700 h-full">
      <HeaderNav />
      <TopPage />
    </div>
  );
}
