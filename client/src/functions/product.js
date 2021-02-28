import axios from 'axios';
const instance = axios.create();

export const getProductsByCount = async (count) => {
  return await axios.get(
        `${process.env.REACT_APP_API}/products/${count}`
      )
};


export const getProduct = async (slug) => {
  return await axios.get(
        `${process.env.REACT_APP_API}/product/${slug}`
      )
};


export const removeProduct = async (slug,authtoken) => {
  return await axios.delete(
        `${process.env.REACT_APP_API}/product/${slug}`,
        { data: {authtoken} }
      )
};
//
//
// export const updateCategory = async (slug,category,authtoken) => {
//   return await axios.put(
//         `${process.env.REACT_APP_API}/category/${slug}`,
//         {authtoken, category}
//       )
// };


export const createProduct = async (product,authtoken) => {
  return await axios.post(
        `${process.env.REACT_APP_API}/product`,
        {authtoken,product}
      )
};
