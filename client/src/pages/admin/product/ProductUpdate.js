import React, {useState,useEffect} from 'react';
import AdminNav from '../../../components/nav/AdminNav';
import {toast} from 'react-toastify';
import {useSelector} from 'react-redux';
import {
  getProduct,
} from '../../../functions/product';
import {getCategories, getCategorySubs} from '../../../functions/category';
import FileUpload from '../../../components/forms/FileUpload';
import {LoadingOutlined} from '@ant-design/icons'
import ProductUpdateForm from '../../../components/forms/ProductUpdateForm';
import {useParams} from 'react-router-dom';


const initState = {
    title: '',
    description: '',
    price: '',
    category: '',
    subs: [],
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", 'Brown', "Silver", "Blue", 'White'],
    brands: ["Apple", 'Microsoft', "Samsung", "Lenovo", 'ASUS'],
    color: '',
    brand: ''
  }




const ProductUpdate = ({match}) => {


//state
    const [values, setValues] = useState(initState);
    const [subOptions, setSubOptions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [arrayOfSubs, setArrayOfSubIds] = useState([]);
// redux
    const {user} = useSelector((state) => ({...state}));
//router
    const {slug} = match.params;


    useEffect(() => {
      loadProduct();
      loadCategories();
    },[])

const loadProduct = () => {
   getProduct(slug)
   .then(p => {
     // console.log('Single Product' ,p)
     // 1 load single product
     setValues({...values, ...p.data});
     // 2 load single prodict category subs
     getCategorySubs(p.data.category._id)
     .then(res => {
       setSubOptions(res.data) // on first load
     })
     // 3 prepare array of sub ids to show default sub values in antd design Select
     let arr = []
     p.data.subs.map((s) => {
       arr.push(s._id)
     })
     console.log("ARR", arr)
     setArrayOfSubIds((prev) => arr) //& this special syntax we can replace existing prev values by new arr values  //required for ant design select to work
   })
 }

 const loadCategories = () =>
     getCategories().then((c) => setCategories(c.data));



    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const handleChange = (e) => {
      //
      setValues({...values, [e.target.name]: e.target.value })
      // console.log(e.target.name, '-------------', e.target.value);
    }

    const handleCategoryChange = (e) => {
      e.preventDefault();
      console.log('CLICKED CATEGORY', e.target.value);
      setValues({...values, subs: [], category: e.target.value });
      getCategorySubs(e.target.value)
      .then(res => {
        console.log('Sub Options on Category', res);
        setSubOptions(res.data);
      })
    }



  return (
    <div className='container-fluid'>
      <div className='row'>
          <div className='col-md-2'>
              <AdminNav />
          </div>
          <div className='col'>
              <h3>Product Update</h3>
              {JSON.stringify(values)}
              < ProductUpdateForm
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      handleCategoryChange={handleCategoryChange}
                      subOptions={subOptions}
                      /*showSub={showSubs}*/
                      categories={categories}
                      setValues={setValues}
                      values={values}
              />
            <hr />
          </div>
      </div>
  </div>
  )
}

export default ProductUpdate;
