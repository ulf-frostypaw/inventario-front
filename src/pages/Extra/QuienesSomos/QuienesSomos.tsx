import Layout from "@/components/Layout";
import "./QuienesSomos.css";
import { Link } from "react-router-dom";

export default function QuienesSomos() {
  return (
    <Layout title="Sobre nosotros">
      <div className="container mx-auto my-12">
        <section className="aboutUs">
          <article>
            <div className="principal">
              <div className="secondary1">
                <h1 className="h1About">Sobre nosotros</h1>
                <p className="pAbout">
                  Somos una empresa dedicada a la venta de aires acondicionados
                  y refacciones, así como a la prestación de servicios de
                  mantenimiento y reparación. Nuestro equipo está compuesto por
                  profesionales altamente capacitados que comparten una pasión
                  por la eficiencia energética y la sostenibilidad. Nos
                  esforzamos por construir relaciones duraderas con nuestros
                  clientes, basadas en la confianza y la excelencia en el
                  servicio. En nuestra empresa, cada acción está orientada a
                  mejorar la calidad de vida de las personas, cuidando al mismo
                  tiempo nuestro planeta.
                </p>
              </div>
              <div className="secondary2">
              <img
              src={import.meta.env.VITE_APP_URL + "/aireAbout.webp"}
              alt=""
              className="aireAbout"
          />
              </div>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
}
