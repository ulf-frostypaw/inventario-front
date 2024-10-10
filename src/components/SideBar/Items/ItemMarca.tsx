import React from "react";

export const ItemMarca = () => {
    return (
        <div>
            <div className="text-black text-lg font-bold cursor-default">
              Marca
            </div>
            <p className="text-sm mt-2">
              <input type="checkbox" /> Daikin
            </p>
            <p className="text-sm">
              <input type="checkbox" /> Carrier
            </p>
          </div>
    );
}

export default ItemMarca