import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsResponse } from "core/types/Product";
import { makeRequest } from "core/utils/request";
import ProductCard from "./components/ProductCard";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";
import "./styles.scss";

const Catalog = () => {
  const [productResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 12,
    };

    //start loader
    setIsloading(true);
    makeRequest({ url: "/products", params })
      .then((response) => setProductsResponse(response.data))
      .finally(() => {
        //end loader
        setIsloading(false);
      });
  }, []);

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Products Catalog</h1>
      <div className="catalog-products">
        {isloading ? (
          <ProductCardLoader />
        ) : (
          productResponse?.content.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
