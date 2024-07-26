import React from "react";

function Tables({children}) {
  return (
    <div className="flex-grow flex flex-col items-center p-6">
      <div className="w-full flex justify-end mb-4">
        <a
          href="http://localhost:5173/addUsers"
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Agregar usuario
        </a>
      </div>
      {children}
    </div>
  );
}

export default Tables;
