import axios from "axios";
const Base_URL = "https://fakestoreapi.com";

export const getAllProduct = async () => {
  const response = await axios.get(`${Base_URL}/products`);
  return response.data;
};


export const getProductById =async (id)=>{
    const response =await axios.get(`${Base_URL}/products/${id}`)
    return response.data
}