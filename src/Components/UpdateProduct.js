import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

  let uploadimage = null;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  // Upload Image
  const handleFile = () => {
    console.log("hello world")
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://localhost:8080/file/upload", {
      method: 'POST',
      body: formData,
      dataType: "jsonp"
    })
      .then(response => response.text())
      .then(text => {
        console.log(text)
        uploadimage = text;
        console.log("===Upload Image=====" + uploadimage)
      })
  }

  // Upload Products
const[formData,setFormData] = useState({
    productid:"",
    productname:"",
    categoryname:"",
    description:"",
    price:"",
    image:"",
  });

  const handleChange =(event) =>{
    const {name,value}=event.target; 
    setFormData({...formData,[name]:value})
    console.log(name,value);
}

// To update a product
const handleSubmit =(event) =>{
  // event.preventDefault();
  console.log(formData);
  if (formData.productname && formData.description && formData.price == '') {
    console.log("Noooo")
  } else {
    console.log("Category", selectedCategory)
    const SignUp = {
      productid : formData.productid,
      productname: formData.productname,
      description: formData.description,
      price: formData.price,
      categoryname: selectedCategory,
      image: uploadimage
    }

fetch(`http://localhost:8080/shop/updateproduct/${formData.productid}`,{
  headers:{
    "Content-Type":"application/json"
  },
  method: 'Put',
  body: JSON.stringify(SignUp)
}) 
.then((response)=>{
  if(!response.ok) {
      throw new Error("Failed to fetch data");
  }
  return response.text();
 })
 .then((data) => {
  console.log("Data Received: " , data);
 })
 alert("Product updated");
}
}
// To fetch a category
const fetchdata = () => {
  axios.get("http://localhost:8080/shop/getcategory")
    .then((res) => {
      setCategories(res.data);
    })
}
useEffect(() => {
  fetchdata()
}, []);

const handleSelectChange = (event) => {
  console.log("Selected Category ====>" + selectedCategory)
  setSelectedCategory(event.target.value);
};

const bg = {
  backgroundImage:`linear-gradient(rgba(248, 247, 247, 0.3),rgba(248, 247, 247, 0.7)), url('./Images/loginbg.jpg')`, 
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
const content = {

  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  padding: '30px',
  borderRadius: '8px',
  boxShadow: '10px 10px 10px black',
  width: '400px',
  height : '400px'
};
  return (
    <div style={bg}>
      <div class="container">
      <div>

        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
            <button onClick={() => handleFile()}>Upload</button>
          </div>
        )}
        <div className='text-center d-flex justify-content-center align-items-center' style={{height:'620px'}}>
          <form style={content} >
        <p >Product ID : <input type='number' placeholder='enter your productid' name='productid' value={formData.productid} onChange={handleChange} /></p>
        <p >Product Name : <input type='text' placeholder='enter your productname' name='productname' value={formData.productname} onChange={handleChange} /></p>
        <p>Description : <input type='text' placeholder='enter your description' name='description' value={formData.description} onChange={handleChange} /></p>
        <p>Price : <input type='number' placeholder='enter your price' name='price' value={formData.price} onChange={handleChange} /></p>
        <p>
          Category Name:

          <select id="category" value={selectedCategory} onChange={handleSelectChange}>
            <option value="">Select category...</option>
            {categories.map(category => (
              <option key={category.id} value= {category.categoryname}>
                {category.categoryname}
              </option>
            ))}
          </select>
        </p>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
         <button className='m-2' onClick={() => handleSubmit()}>Update</button>
         </form>
      </div>
     
    </div>
    
    </div>
    
    </div>
  )
}

export default UpdateProduct
