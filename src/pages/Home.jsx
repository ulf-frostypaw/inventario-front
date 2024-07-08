import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Layout title={"Inicio"}>
      <div className="">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(https://perufacility.com/wp-content/uploads/2022/05/Servicios-Aire-Acondicionado-1024x576.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",
              }}
            >
              <Carousel.Caption>
                <h3>Instalaciones y servicios</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(https://placehold.co/800x400?text=First+slide)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",
              }}
            >
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(https://placehold.co/800x400?text=First+slide)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",
              }}
            >
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(https://placehold.co/800x400?text=First+slide)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",
              }}
            >
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
        <h1>Algunos de nuestros ultimos productos</h1>
        <Container>
          <Row>
            <Col><ProductCard /></Col>
            <Col><ProductCard /></Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default Home;
