import SideBar from "@/components/SideBar/SideBar";
import Nbar from "@/components/Nbar";
import BodyCards from "@/components/BodyCards/BodyCards";

const Articles = () => {
  return (
    <>
      <Nbar />
      <div className="flex">
        <SideBar />
        <BodyCards />
      </div>
    </>
  );
};
export default Articles;
