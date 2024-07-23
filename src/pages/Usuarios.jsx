import Sidebar from "../components/SideBarDasboard";
import Tables from "../components/Table";

const LeerUsuarios = () => {
  return (
    <>
      <div className="bg-slate-700 w-full h-full flex">
        <div className="mr-[235px]">
          <Sidebar children="Usuarios" />
        </div>
        <Tables />
        
      </div>
    </>
  );
};

export default LeerUsuarios;
