import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "core/assets/images/arrow.svg";
import ProductPrice from "core/components/ProductPrice";
import { Product } from "core/types/Product";
import { makeRequest } from "core/utils/request";
import ProductDescriptionLoader from "../Loaders/ProductDescriptionLoader";
import ProductInfoLoader from "../Loaders/ProductInfoLoader";
import "./styles.scss";

type Paramstype = {
  productId: string;
};

const ProductDetails = () => {
  const { productId } = useParams<Paramstype>();
  const [product, setProduct] = useState<Product>();
  const [isloading, setIsloading] = useState(false);
  console.log(product);

  useEffect(() => {
    //start load
    setIsloading(true);
    makeRequest({ url: `/products/${productId}` })
      .then((response) => setProduct(response.data))
      .finally(() => {
        //end loader
        setIsloading(false);
      });
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback ">Back</h1>
        </Link>
        <div className="row">
          <div className="col-6 pr-5">
            {isloading ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="product-details-card">
                  <img
                    src={product?.imgUrl}
                    alt={product?.name}
                    className="product-details-image"
                  />
                </div>
                <h1 className="product-details-name">{product?.name}</h1>
                {product?.price && <ProductPrice price={product?.price} />}
              </>
            )}
          </div>
          <div className="col-6 product-details-card">
            {isloading ? (
              <ProductDescriptionLoader />
            ) : (
              <>
                <h1 className="product-description-title">
                  Product Description
                </h1>
                <p className="product-description-text">
                  {product?.description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
