const ItemCapacidad = ({ item }) => {
  return (
    <>
      <div className="mt-8">
        <div className="text-black text-lg font-bold cursor-default">
          Capacidad
        </div>
        <p className="text-sm mt-2">
          <input type="checkbox" /> 1 Tonelada
        </p>
        <p className="text-sm">
          <input type="checkbox" /> 1.5 Toneladas
        </p>
        <p className="text-sm">
          <input type="checkbox" /> 2 Toneladas
        </p>
      </div>
    </>
  );
};

export default ItemCapacidad;
