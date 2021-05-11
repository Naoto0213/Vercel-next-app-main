import HeaderNav from "../component/molecules/HeaderNav";
import TopPage from "../component/organisms/FirstPage/TopPage";
export default function Home() {
  return (
    <div className="bg-gray-700 h-full">
      <HeaderNav />
      <TopPage />
    </div>
  );
}
