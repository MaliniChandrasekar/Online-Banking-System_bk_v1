import React from 'react'
import { useState, useEffect } from 'react'
import { AddProduct } from './AddProduct'
import { Link } from 'react-router-dom'
import AvailableProduct from './AvailableProduct'



const Admin1 = () => {

  const [name, setName] = useState([]);
  const [formData, setFormData] = useState(null)
  const [customData, setCustomer] = useState(null)
  const customer = (event) => {
    // event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:8080/shop/getcustomer`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data", data)
        setCustomer(data)
        setName(data)
      })
      .catch((error) => {
        console.error("Error during fetch", error);
      });

  }
  useEffect(() => {
    customer()
  }, []);

  const product = {
    backgroundImage:`linear-gradient(rgba(248, 247, 247, 0.3),rgba(248, 247, 247, 0.7)), url('https://e1.pxfuel.com/desktop-wallpaper/685/872/desktop-wallpaper-soft-color-leaves-backgrounds-background-colour-soft.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    fontSize: '18px',
    color: '#ab00ff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  };

  const handleChange = (event) => {
    setName(customData.filter(f => f.firstname.toLowerCase().includes(event.target.value)))
  };
  
  return (
    <div>
      <div>
      <h3 className='text-center'>Welcome to Admin Dashboard</h3>
      <Link to="/login" className='d-flex justify-content-end m-3' style={{textDecoration: 'none'}}><button>Logout</button></Link>
      </div>
      <div class="container">
        <nav class="d-flex justify-content-center">
          <div class="nav nav-tabs mb-3 " id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Users</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Available Products</button>
            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Orders</button>
            <button class="nav-link" id="nav-connect-tab" data-bs-toggle="tab" data-bs-target="#nav-connect" type="button" role="tab" aria-controls="nav-connect" aria-selected="false">Add a Product</button>
          </div>
        </nav>
        <div class="tab-content p-3 border bg-light d-flex justify-content-center" id="nav-tabContent">
        <div class="tab-pane fade p-3 active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <p>Filter By Firstname : <input type='text' 
                onChange={handleChange}
                // className='form-control'
                placeholder='search'
       />
      </p>
        <table class="table table-bordered border-dark table-striped">
        <thead>
                <tr class="text-center">
                  <th scope="col">ID</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">City</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(customData) && name.map((customData) => (
                  <tr key={customData.signupid}>
                    <td >{customData.signupid}</td>
                    <td >{customData.firstname}</td>
                    <td>{customData.lastname}</td>
                    <td>{customData.city}</td>
                    <td>{customData.email}</td>
                    <td>{customData.password}</td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <AvailableProduct />
          </div>
          <div class="tab-pane fade p-3 border w-50 text-center" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            {/*  */}
          </div>
          <div class="tab-pane fade p-3 border w-50 text-center" id="nav-connect" role="tabpanel" style={product}>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Admin1
