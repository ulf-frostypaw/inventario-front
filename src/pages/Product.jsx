import { useState, useEffect } from "react";
import "../index.css";
import Visualizacion from "../components/Visualizacion";
import Layout from "../components/Layout";
import Nbar from "../components/Nbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

export const App = () => {
  
  const { id } = useParams();
  const [responseDataProduct, setResponseDataProduct] = useState({});

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/listProducts/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseDataProduct) => {
        setResponseDataProduct(responseDataProduct);
      });
  }, [id]);
    
    function handleSubmit(event) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const id_usuario = userData[0]?.id_usuario;
      console.log(id_usuario);

      event.preventDefault();
      const formData = {
        id_producto: responseDataProduct[0]?.id_producto,
        id_cliente: id_usuario,
      };
      fetch(import.meta.env.VITE_API_URL + "/apartarProducto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((responseData) => {
          if(responseData.status == 200){
            alert(responseData.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    const [selectedImage, setSelectedImage] = useState("https://placehold.co/700");
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <Layout title={"Product"}>
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full aspect-square object-cover"
                      src={selectedImage}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === responseDataProduct[0]?.images
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick(responseDataProduct[0]?.images)
                      }
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={responseDataProduct[0]?.images}
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === "https://www.electroclimalia.com/8190-large_default/aire-acondicionado-daikin-txc50b-inverter.jpg"
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick("https://www.electroclimalia.com/8190-large_default/aire-acondicionado-daikin-txc50b-inverter.jpg")
                      }
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="https://www.electroclimalia.com/8190-large_default/aire-acondicionado-daikin-txc50b-inverter.jpg"
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === "http://placehold.co/700"
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick("http://placehold.co/700")
                      }
                    >
                      <img
                        className="h-full w-full object-cover"
                        src="http://placehold.co/700"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {responseDataProduct[0]?.nombre_producto}
              </h1>

              {/* <h2 className="mt-8 text-base text-gray-900">Toneladas</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input type="number" name="toneladas" min={"1"} max={"10"} placeholder="0 toneladas" id="" />
                </label>
              </div> */}

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">${responseDataProduct[0]?.precio_costo}</h1>
                  <span className="text-sm font-medium text-gray-600 ml-2">/ tonelada</span>
                </div>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <Button onClick={handleSubmit} variant="primary">Apartar producto</Button>
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600 mx-4">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Este producto solo se puede retirar en tienda.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <span
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    Descripción
                  </span>
                </nav>
              </div>

              <div className="mt-8 flow-root sm:mt-12">
                {/* <h1 className="text-3xl font-bold">Delivered To Your Door</h1> */}
                {responseDataProduct[0]?.descripcion}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
