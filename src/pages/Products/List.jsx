import React from "react";
import Layout from "../../components/Layout";
import SidebarFilters from "../../components/SidebarFilter";
import Card from "../../components/Product/Card";
import Heading from "../../components/SectionHeader/Heading";

function List() {
  return (
    <Layout title={"Productos"}>
      <div className="container mx-auto">
      <div className="container relative flex flex-col lg:flex-row" id="body">
      <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <Heading title="Catalogo de productos" className="my-4" />
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {/* {shoes.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))} */}
            <Card productName="Los jordan" productDescription="Lorem ipsum sit amet" priceSale={"2,000"} />
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default List;
