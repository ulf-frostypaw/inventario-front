import { useState } from "react";
import "../index.css";
import Visualizacion from "../components/Visualizacion";
import Layout from "../components/Layout";
import Nbar from "../components/Nbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

export const App = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("http://placehold.co/900");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  return (
    <Layout title={"Product"}>
      <section class="py-12 sm:py-16">
        <div class="container mx-auto px-4">

          <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div class="lg:col-span-3 lg:row-end-1">
              <div class="lg:flex lg:items-start">
                <div class="lg:order-2 lg:ml-5">
                  <div class="max-w-xl overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full aspect-square object-cover"
                      src={selectedImage}
                      alt=""
                    />
                  </div>
                </div>

                <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div class="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      class={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === "http://placehold.co/500"
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick("http://placehold.co/500")
                      }
                    >
                      <img
                        class="h-full w-full object-cover"
                        src="http://placehold.co/500"
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      class={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === "http://placehold.co/800"
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick("http://placehold.co/800")
                      }
                    >
                      <img
                        class="h-full w-full object-cover"
                        src="http://placehold.co/800"
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      class={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        selectedImage === "http://placehold.co/700"
                          ? "border-gray-900"
                          : "border-transparent"
                      } text-center`}
                      onClick={() =>
                        handleImageClick("http://placehold.co/700")
                      }
                    >
                      <img
                        class="h-full w-full object-cover"
                        src="http://placehold.co/700"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                Afro-Brazillian Coffee
              </h1>

              <h2 class="mt-8 text-base text-gray-900">Coffee Type</h2>
              <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    class="peer sr-only"
                    checked
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Powder
                  </p>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Whole Bean"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Whole Bean
                  </p>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="type"
                    value="Groud"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    Groud
                  </p>
                </label>
              </div>

              <h2 class="mt-8 text-base text-gray-900">Choose subscription</h2>
              <div class="mt-3 flex select-none flex-wrap items-center gap-1">
                <label class="">
                  <input
                    type="radio"
                    name="subscription"
                    value="4 Months"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    4 Months
                  </p>
                  <span class="mt-1 block text-center text-xs">$80/mo</span>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="subscription"
                    value="8 Months"
                    class="peer sr-only"
                    checked
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    8 Months
                  </p>
                  <span class="mt-1 block text-center text-xs">$60/mo</span>
                </label>
                <label class="">
                  <input
                    type="radio"
                    name="subscription"
                    value="12 Months"
                    class="peer sr-only"
                  />
                  <p class="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">
                    12 Months
                  </p>
                  <span class="mt-1 block text-center text-xs">$40/mo</span>
                </label>
              </div>

              <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div class="flex items-end">
                  <h1 class="text-3xl font-bold">$60.50</h1>
                  <span class="text-base">/month</span>
                </div>
              </div>

              <ul class="mt-8 space-y-2">
                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <Button variant="primary">Apartar producto</Button>
                </li>

                <li class="flex items-center text-left text-sm font-medium text-gray-600">
                  <li class="flex items-center text-left text-sm font-medium text-gray-600 my-4">
                    <svg
                      class="mr-2 block h-5 w-5 align-middle text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        class=""
                      ></path>
                    </svg>
                    Este producto solo se puede retirar en tienda.
                  </li>
                </li>
              </ul>
            </div>

            <div class="lg:col-span-3">
              <div class="border-b border-gray-300">
                <nav class="flex gap-4">
                  <a
                    href="#"
                    title=""
                    class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    {" "}
                    Description{" "}
                  </a>
                </nav>
              </div>

              <div class="mt-8 flow-root sm:mt-12">
                <h1 class="text-3xl font-bold">Delivered To Your Door</h1>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  accusantium nesciunt fuga.
                </p>
                <h1 class="mt-8 text-3xl font-bold">
                  From the Fine Farms of Brazil
                </h1>
                <p class="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  numquam enim facere.
                </p>
                <p class="mt-4">
                  Amet consectetur adipisicing elit. Optio numquam enim facere.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore rerum nostrum eius facere, ad neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
