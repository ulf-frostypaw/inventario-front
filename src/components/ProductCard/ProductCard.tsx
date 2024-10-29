import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
interface ProductCardProps {
  nombreProducto: string;
  imagenProducto: string;
  precioProducto: number;
}
function ProductCard({
  nombreProducto = "",
  imagenProducto = "https://placehold.co/300",
  precioProducto = 0,
}:ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-images">
        <Link to={import.meta.env.VITE_APP_URL + "/article/1"}>
          <div className="product-image">
            <img src={imagenProducto} alt={nombreProducto} />
          </div>
        </Link>
      </div>
      <div className="product-info">
        <h2 className="product-title"><Link to={import.meta.env.VITE_APP_URL + "/article/1"}>{nombreProducto}.</Link></h2>
        <div className="product-price">
          <span className="current-price">$ {precioProducto}</span>
          {/* <span className="original-price">$399.90</span> */}
          {/* <span className="discount">40% OFF</span> */}
        </div>
        {/* <p className="installment">en 24 meses de $14.50</p> */}
        <p className="free-shipping">Solo retiro en tienda</p>
      </div>
    </div>
  );
}

export default ProductCard;
