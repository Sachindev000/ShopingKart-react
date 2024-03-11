import React, { useContext, useEffect, useState } from "react";
import { Cart } from "../Context/Context";



const CartPage = () => {
  const {cart,setCart}=useContext(Cart)
  const [total, setTotal] = useState();


  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <>
       <div className="mt-5">
        <hr className="text-red-800 " />
        <h1 className="text-3xl ">Total:{total}rs</h1>
      </div>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center p-2  md:h-[300px]"
          >
            
            <img
              className="w-full md:w-[150px] h-[300px] md:mr-20px object-contain mb-5 md:mb-0"
              src={item.image}
              alt=""
            />
            <div className="flex-1 p-5">
              <h2 className="font-bold text-xl md:text-2xl">{item.title}</h2>
              <p className="mt-2 md:mt-10px">{item.description}</p>

              <p className="text-xl font-bold text-red-600 mt-2 md:mt-5">
                Price: {item.price}$
              </p>
              <div className="flex mt-2 md:mt-5">
                <button className="bg-gray-800 text-white p-2 block">
                  Buy Now
                </button>
                <button onClick={()=>{
                  setCart(cart.filter((c)=>c.id !== item.id))
                }} className="bg-gray-800 text-white p-2 ml-2 md:ml-5">
                  Remove🛒
                </button>
              </div>
         
            </div>
          </div>
        ))
      ) : (
        
        <div className="mt-5 p-2 text-center">
          <h2>Cart is empty please add items</h2>
        </div>
      )}

     
    </>
  );
};

export default CartPage;
