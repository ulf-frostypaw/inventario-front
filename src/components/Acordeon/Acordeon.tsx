import Layout from "@/components/Layout";
import Heading from "@/components/SectionHeader/Heading";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./style.css";

function Servicios() {

  useEffect(() => {
    const acordeon = document.getElementsByClassName('contenedor');

    for (let i = 0; i < acordeon.length; i++) {
      acordeon[i].addEventListener('click', () => {
        acordeon[i].classList.toggle('activa');
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      for (let i = 0; i < acordeon.length; i++) {
        acordeon[i].removeEventListener('click', () => {
          acordeon[i].classList.toggle('activa');
        });
      }
    };
  }, []);

  return (
    <Layout title={"Servicios"}>
      <div className="acordeon-cuerpo">
        <div className="acordeon">
          <h1>Preguntas Frecuentes</h1>
          <hr />
          <div className="contenedor">
            <div className="label">¿Qué es HTML?</div>
            <div className="content">
              El lenguaje de marcas de hipertexto (HTML) es un lenguaje
              informático que compone la mayoría de las páginas web y
              aplicaciones en línea. Un hipertexto es un texto que se utiliza
              para hacer referencia a otros fragmentos de texto, mientras que un
              lenguaje de marcas es una serie de marcas que indican a los
              servidores web el estilo y la estructura de un documento. El
              lenguaje HTML es muy sencillo de aprender y utilizar.
            </div>
          </div>
          <hr />
          <div className="contenedor">
            <div className="label">¿Qué es CSS?</div>
            <div className="content">
              CSS son las siglas de Cascading Style Sheets (hojas de estilo en
              cascada). Es el lenguaje para describir la presentación de las
              páginas web, incluyendo los colores, el diseño y las fuentes,
              haciendo así que nuestras páginas web sean presentables para los
              usuarios. CSS está diseñado para hacer hojas de estilo para la
              web. Es independiente de HTML y puede utilizarse con cualquier
              lenguaje de marcado basado en XML. El CSS es popularmente llamado
              el lenguaje de diseño de la web.
            </div>
          </div>
          <hr />
          <div className="contenedor">
            <div className="label">¿Qué es JavaScript?</div>
            <div className="content">
              JavaScript es un lenguaje de programación que permite implementar
              funciones complejas en las páginas web. Cada vez que una página
              web hace algo más que limitarse a mostrar información estática
              para que la veas, mostrando actualizaciones puntuales de
              contenido, mapas interactivos, gráficos 2D/3D animados,
              videocámaras con desplazamiento, etc., puedes apostar que
              JavaScript está probablemente involucrado. Es el tercero del trío
              web.
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="label">¿Qué es React?</div>
            <div className="content">
              React es una biblioteca de JavaScript creada para construir
              interfaces de usuario rápidas e interactivas para aplicaciones web
              y móviles. Es una biblioteca de código abierto, basada en
              componentes, responsable únicamente de la capa de vista de la
              aplicación. En la arquitectura Modelo-Vista-Controlador (MVC), la
              capa de vista es responsable del aspecto y la sensación de la
              aplicación. React fue creado por Jordan Walke, un ingeniero de
              software de Facebook.{" "}
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="etiqueta">¿Qué es PHP?</div>
            <div className="contenido">
              PHP es un lenguaje de scripting del lado del servidor y de
              propósito general que es especialmente adecuado para el desarrollo
              web. Originalmente, PHP significaba "Personal Home Page". Sin
              embargo, ahora significa Hypertext Preprocessor. Es un acrónimo
              recursivo porque la primera palabra también es un acrónimo.
            </div>
          </div>
          <hr />
          <div className="contenedor">
            <div className="etiqueta">¿Qué es Node JS?</div>
            <div className="contenido">
              Node.js es un entorno de ejecución de JavaScript de código abierto
              y multiplataforma que se ejecuta en el motor V8 y ejecuta código
              JavaScript fuera de un navegador web. Node.js permite a los
              desarrolladores utilizar JavaScript para escribir herramientas de
              línea de comandos y para la ejecución de scripts del lado del
              servidor para producir contenidos dinámicos de páginas web antes
              de que la página se envíe al navegador web del usuario. Por lo
              tanto, Node.js representa un paradigma de "JavaScript en todas
              partes".
            </div>
          </div>
          <hr />
        </div>
      </div>
    </Layout>
  );
}

export default Servicios;
