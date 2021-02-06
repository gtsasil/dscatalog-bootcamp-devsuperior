import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsResponse } from "core/types/Product";
import { makeRequest } from "core/utils/request";
import ProductCard from "./components/ProductCard";
import ProductCardLoader from "./components/Loaders/ProductCardLoader";
import "./styles.scss";
import Pagination from "core/components/Pagination";

const Catalog = () => {
  const [productResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isloading, setIsloading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage,
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
  }, [activePage]);

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
      {productResponse && (
        <Pagination
          totalPages={productResponse.totalPages}
          activePage={activePage}
          onChange={(page) => setActivePage(page)}
        />
      )}
    </div>
  );
};

export default Catalog;
