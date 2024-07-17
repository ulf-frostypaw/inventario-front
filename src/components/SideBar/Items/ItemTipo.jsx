const ItemTipo = ({ tipo }) => {
  return (
    <>
      <div className="mt-8">
        <div className="text-black text-lg font-bold cursor-default">Tipo</div>
        <p className="text-sm mt-2">
          <input type="checkbox" /> MiniSplit
        </p>
        <p className="text-sm">
          <input type="checkbox" /> Split
        </p>
        <p className="text-sm">
          <input type="checkbox" /> Industrial
        </p>
      </div>
    </>
  );
};

export default ItemTipo;