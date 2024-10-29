import React from "react";

function Tables({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow flex flex-col items-center p-6">
      {children}
    </div>
  );
}

export default Tables;
