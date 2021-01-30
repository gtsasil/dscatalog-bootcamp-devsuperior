import React from "react";
import { ReactComponent as ProductImage } from "../../../../core/assets/images/product.svg";
import ProductPrice from "../../../../core/components/ProductPrice";
import "./styles.scss";

const ProductCard = () => (
  <div className=" card-base border-radius-10 product-card product-name">
    <ProductImage />
    <div className="product-info">
      <h6> Desktop Computer - Intel Core i7</h6>
      <ProductPrice price="2.779,00" />
    </div>
  </div>
);

export default ProductCard;
