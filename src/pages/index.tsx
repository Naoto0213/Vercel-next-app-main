import HeaderNav from "../components/molecules/HeaderNav";
import TopPage from "../components/organisms/FirstPage/TopPage";
export default function Home() {
  return (
    <div className="bg-gray-700 h-full">
      <HeaderNav />
      <TopPage />
    </div>
  );
}
