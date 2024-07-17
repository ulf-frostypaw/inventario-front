import ItemMarca from "./Items/ItemMarca"
import ItemPrecio from "./Items/ItemPrecio"
import ItemCapacidad from "./Items/ItemCapacidad";
import ItemTipo from "./Items/ItemTipo";

const SideBar = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-white fixed p-4 w-full sm:w-64 h-screen border-r-2 border-r-slate-400 text-slate-700">
          <ItemMarca />
          <ItemPrecio />
          <ItemCapacidad />
          <ItemTipo />
        </div>
      </div>
    </>
  );
};

export default SideBar;
