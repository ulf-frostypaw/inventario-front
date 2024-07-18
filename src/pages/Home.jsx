import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";
function Home() {
  const [productos, setProductos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <Layout title={"Inicio"}>
      <div className="mx-auto container flex flex-wrap">
        <Button variant="default">Botón</Button>
        {productos.map((producto, index) => (
          <div key={index} className=" px-4 mb-8">
            <Card
              imagenProducto={producto.image}
              nombreProducto={producto.title}
              precioProducto={producto.price}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Home;
