import Layout from "@/components/Layout";
import "./Mision.css";

export default function Mision() {
  return (
    <Layout title="Nuestra mision">
      <div className="container mx-auto my-12">
        <section className="aboutUs">
          <article>
          <div className="principal">
              <div className="secondary1">
                <h1 className="h1About">Sobre nosotros</h1>
                <p className="pAbout">
                  Proporcionar a nuestros clientes productos y servicios de alta
                  calidad en el ámbito de aires acondicionados, incluyendo la
                  venta de refacciones y mantenimiento, con un enfoque en la
                  eficiencia energética y el respeto por el medio ambiente. Nos
                  comprometemos a ofrecer soluciones que mejoren el confort
                  climático en hogares y empresas, garantizando la satisfacción
                  del cliente a través de un servicio excepcional.
                </p>
              </div>

              <div className="secondary2">
                <img
                  src={import.meta.env.VITE_APP_URL + "/refactory.jpg"}
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
