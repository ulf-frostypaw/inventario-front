import Layout from "@/components/Layout";
import "./Vision.css";

export default function Vision() {
  return (
    <Layout title="Nuestra vision">
      <div className="container mx-auto my-12">
      <section className="aboutUs">
          <article>
            <div className="principal">
              <div className="secondary1">
                <h1 className="h1About">Sobre nosotros</h1>
                <p className="pAbout">
              Crear un futuro donde cada hogar y empresa disfruten de un confort
              climático óptimo, utilizando tecnologías avanzadas y prácticas
              responsables que promuevan un desarrollo económico limpio y
              sostenible. Aspiramos a ser líderes en la industria de aires
              acondicionados, reconocidos por nuestra innovación y compromiso
              con el medio ambiente.
            </p>
            </div>
              <div className="secondary2">
              <img
              src={import.meta.env.VITE_APP_URL + "/industrial.jpg"}
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
