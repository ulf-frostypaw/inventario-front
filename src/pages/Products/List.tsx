import React from "react";
import Layout from "@/components/Layout";
import SidebarFilters from "@/components/SideBarFilter/SidebarFilter";
import Card from "@/components/Product/Card";
import Heading from "@/components/SectionHeader/Heading";


interface ListTypes{
  nombre_producto: string;
  Categoria: string;
  precio_venta: number;
  id_producto: string;
  images: string[];
}
function List() {
  const [data, setData] = React.useState<ListTypes[]>([]);
  fetch(import.meta.env.VITE_API_URL + "/listProducts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      //console.log(data)
    })
    .catch((error) => console.error("Error:", error));
  return (
    <Layout title={"Productos"}>
      <div className="container mx-auto">
        <div className="container relative flex flex-col lg:flex-row" id="body">
          <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
            <SidebarFilters />
          </div>
          <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
          <div className="relative flex-1">
            <Heading title="Catalogo de productos" className="my-4" children={undefined} desc={""} isCenter={false} isMain={false} props={undefined} />
            <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
              {/* {shoes.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))} */}
              {data.map((item, index) => (
                <Card
                  key={index}
                  productName={item.nombre_producto}
                  productDescription={item.Categoria}
                  priceSale={item.precio_venta}
                  link={item.id_producto}
                  sourceImage={item.images}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default List;
