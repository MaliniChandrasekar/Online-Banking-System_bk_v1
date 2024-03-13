import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateProduct from './UpdateProduct';
import { useNavigate } from 'react-router-dom';

  const AvailableProduct = () => {

    const navigate=useNavigate();
    const [name, setName] = useState([]);
    const [formData, setFormData] = useState(null)

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(formData);
        fetch(`http://localhost:8080/shop/getproduct`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Data", data)
            setFormData(data)
            setName(data)
          })
          .catch((error) => {
            console.error("Error during fetch", error);
          });
    
      }
      useEffect(() => {
        handleSubmit()
      }, []);
     
      const UpdateProduct = () => {
        navigate("/update")
      }
     
    
//filter by name
const handleChange = (event) => {
  setName(formData.filter(f => f.productname.toLowerCase().includes(event.target.value)))
};

  return (
    <div>
      <p>Filter By Product Name : <input type='text' 
                onChange={handleChange}
                // className='form-control'
                placeholder='search'
       />
      </p>
            <table class="table table-bordered border-dark">
              <thead>
                <tr class="text-center">
                  <th scope="col">ID</th>
                  <th scope="col" className='text-nowrap'>Category Name</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image Name</th>
                  <th scope="col">Edit/Update</th>
                </tr>
              </thead>
              <tbody>
                {/* {Array.isArray(formData) && filteredData.map((formData) => ( */}
                {Array.isArray(formData) && name.map((formData) => (
                  <tr key={formData.id}>
                    <td class="table-primary">{formData.productid}</td>
                    <td class="table-danger">{formData.categoryname}</td>
                    <td class="table-success">{formData.productname}</td>
                    <td class="table-warning">{formData.description}</td>
                    <td class=" text-nowrap table-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                    </svg>{formData.price}</td>
                    <td class="table-danger">{formData.image}</td>
                    <td class="table-secondary"><button  onClick={UpdateProduct}>Edit</button></td>
                  </tr>
                
                ))}
                
              </tbody>

            </table>

    </div>
  )
}

export default AvailableProduct
