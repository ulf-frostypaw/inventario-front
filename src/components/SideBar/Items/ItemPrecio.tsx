import { ReactNode } from 'react';

const Button = ({ children }: { children: ReactNode }) => {
    return (
      <button className="text-base sm:text-lg flex justify-center bg-blue-500 text-white px-2 sm:px-3 rounded-lg hover:bg-blue-700 w-auto">
        {children}
      </button>
    );
  };
  
  export const ItemPrecio = () => {
    return (
      <div className="mt-8">
        <div className="text-black text-lg font-bold cursor-default">
          Precio
        </div>
        <div className="mt-2 flex flex-wrap sm:flex-nowrap items-center">
          <div>
            <input
              type="text"
              placeholder="1000"
              min="0"
              className="mr-1 w-20 px-3 text-center py-[1px] text-sm rounded-md border-solid border-2 border-gray-400 outline-gray-600"
            />
          </div>
          <div className="text-gray-400 text-3xl">-</div>
          <div>
            <input
              type="text"
              placeholder="10000"
              min="0"
              className="ml-1 w-20 text-center px-3 py-[1px] text-sm rounded-md border-solid border-2 border-gray-400 outline-gray-600"
            />
          </div>
          <div className="ml-2 mt-2 sm:mt-0 flex justify-center">
            <Button children=">" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemPrecio;
