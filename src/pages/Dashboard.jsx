import Sidebar from "../components/SideBarDasboard";
import Tables from "../components/Table";

const Dashboard = () => {
  return (
    <>
      <div className="bg-slate-700 w-full h-full flex">
        <div className="w-1/10">
          <Sidebar children="Dashboard" />
        </div>
        <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start">
          {/* Card 1 */}
          <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Total Usuarios</h3>
            <p className="text-gray-700 text-3xl">150</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Usuarios Activos</h3>
            <p className="text-gray-700 text-3xl">120</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white m-4 p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Usuarios Inactivos</h3>
            <p className="text-gray-700 text-3xl">30</p>
          </div>
          <Tables />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
