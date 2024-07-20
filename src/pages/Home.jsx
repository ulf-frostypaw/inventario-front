import React, { useContext } from "react";
import Layout from "../components/Layout";
import Card from "../components/Product/Card";
import Button from "../components/Button";
import Heading from "../components/SectionHeader/Heading";
import BestDeals from "../components/SectionHeader/BestDeals";
import { AuthContext } from "../components/Auth/AuthContext";
function Home() {
  const [productos, setProductos] = React.useState([]);
  const [error, setError] = React.useState(null);
  const {email, setEmail} = useContext(AuthContext);
  console.log("Email: " + email);

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
      <div className="container mx-auto my-12">
      <BestDeals />
        <Heading isCenter isMain desc="Seleccionamos estos productos para esta temporada de calor veraniego.">
          Recomendados
        </Heading>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
