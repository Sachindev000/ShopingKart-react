import React, { useContext, useEffect, useState } from "react";
import { getProductById } from "../Api/api";
import { useParams } from "react-router-dom";
import { Cart } from "../Context/Context";

const ProductDetails = () => {
  const {cart,setCart}=useContext(Cart)
  const { id } = useParams(cart);

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductById(id);
      setProductDetails(data);
    };
    fetchProductDetails();
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-5">
      <img
        className="w-full md:w-[300px] h-[500px] object-contain mb-5 md:mb-0"
        src={productDetails.image}
        alt=""
      />
      <div className="flex-1 p-5">
        <h2 className="font-bold text-2xl mb-3 md:mb-5">
          {productDetails.title}
        </h2>
        <p className="mb-5">{productDetails.description}</p>

        <p className="text-2xl font-bold text-red-600 mb-5">
          Price: {productDetails.price}$
        </p>

        <button
          onClick={() => {
            setCart([...cart, productDetails]);
          }}
          className="bg-gray-800 text-white p-2 block"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
