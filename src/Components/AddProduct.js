import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export const AddProduct = () => {

  //Set Image
  let uploadimage = null;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  // const [category, setCategory] = useState();


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

  //Add Products

  const [formData, setData] = useState({
    productname: "",
    description: "",
    price: "",
    categoryname: ""

  })


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...formData, [name]: value })
    console.log(name, value);
  }
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(formData);
    if (formData.productname && formData.description && formData.price == '') {
      console.log("Noooo")
    } else {
      console.log("Category", selectedCategory)
      const SignUp = {
        productname: formData.productname,
        description: formData.description,
        price: formData.price,
        categoryname: selectedCategory,
        image: uploadimage
      }
      console.log("=========Signup========" + JSON.stringify(SignUp))
      fetch("http://localhost:8080/shop/addproduct", {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(SignUp)
      })
        .then((response) => {
          console.log("Data received " + response);
        })

    }
    alert("Product Added");
  }
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
  return (
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
          {/* : <div>Hello</div>
          }    */}
        </p>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
      <button onClick={() => handleSubmit()}>Add</button>
    </div>
  )
}

// export default AddProduct

