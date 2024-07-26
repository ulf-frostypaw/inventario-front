import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

function ListProducts() {
  return (
    <DashboardLayout title="Products">
      <div className="flex-grow p-6 ml-[235px] flex flex-wrap justify-center items-start container mx-auto ">
        <h1>List Products</h1>
      </div>
    </DashboardLayout>
  );
}

export default ListProducts;
