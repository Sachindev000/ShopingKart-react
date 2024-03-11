import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getAllProduct } from "../Api/api";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchAllProduct = async () => {
      const data = await getAllProduct();
      setProduct(data);
    };
    fetchAllProduct();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>All Products</h1>
      </div>
      <div className="shadow-lg">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 ml-12">
          {product.map((item, index) => {
            return (
              <Card key={index} style={{ width: "18rem" }} className="mt-5">
                <Card.Img className="h-96" variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Link to={`/productDetails/${item.id}`}>
                  <button className="border p-2 bg-gray-700 text-white w-full">
                    More
                  </button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
