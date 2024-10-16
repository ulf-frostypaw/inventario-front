import { useContext, useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Card from "@/components/Product/Card";
import Heading from "@/components/SectionHeader/Heading";

interface Producto {
  nombre_producto: string;
  descripcion: string;
  precio_costo: number;
  id_producto: string;
  images: string[];
}
function Home() {
  
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/listProducts")
      .then((response) => response.json())
      .then((data) => setProductos(data))
  }, []);

  return (
    <Layout title={"Inicio"}>
      <div className="container mx-auto my-12">
        <Heading className="p-4" isCenter isMain desc="Productos de ultima generación y hechos a su medida para mayor comodidad." title={""} props={undefined}>
          Últimos productos
        </Heading>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto, index) => (
            <Card key={index} productName={producto.nombre_producto} productDescription={producto.descripcion} priceSale={producto.precio_costo} link={producto.id_producto} sourceImage={producto.images} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
