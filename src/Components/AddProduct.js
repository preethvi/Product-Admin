import React, { useState } from 'react'

const AddProduct = () => {

    const [selectedValue,setSelectedValue]=useState(1);
    const handleChange=(e)=>{
        setSelectedValue(e.target.value)
    }

    return (
        <>
       <nav className="navbar navbar-expand-xl">
      <div className="container h-100">
        <a className="navbar-brand" href="index.html">
          <h1 className="tm-site-title mb-0">Product Admin</h1>
        </a>
        <button
          className="navbar-toggler ml-auto mr-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars tm-nav-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto h-100">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="fas fa-tachometer-alt"></i> Dashboard
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="far fa-file-alt"></i>
                <span> Reports <i className="fas fa-angle-down"></i> </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Daily Report</a>
                <a className="dropdown-item" href="#">Weekly Report</a>
                <a className="dropdown-item" href="#">Yearly Report</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="products.html">
                <i className="fas fa-shopping-cart"></i> Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="accounts.html">
                <i className="far fa-user"></i> Accounts
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-cog"></i>
                <span> Settings <i className="fas fa-angle-down"></i> </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Billing</a>
                <a className="dropdown-item" href="#">Customize</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link d-block" href="login.html">
                Admin, <b>Logout</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
                <h2 className="tm-block-title d-inline-block">Add Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
            <form action="" className="tm-edit-product-form">
              <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="form-group mb-3">
                    <label
                      htmlFor="name"
                      >Product Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control validate"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="description"
                      >Description</label
                    >
                    <textarea
                      className="form-control validate"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      htmlFor="category"
                      >Category</label
                    >
                    <select value={selectedValue} onChange={handleChange}
                      className="custom-select tm-select-accounts"
                      id="category"
                    >
                      <option disabled>Select category</option>
                      <option value="1">New Arrival</option>
                      <option value="2">Most Popular</option>
                      <option value="3">Trending</option>
                    </select>
                  </div>
                  <div className="row">
                      <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="expire_date"
                            >Expire Date
                          </label>
                          <input
                            id="expire_date"
                            name="expire_date"
                            type="text"
                            className="form-control validate"
                            data-large-mode="true"
                          />
                        </div>
                        <div className="form-group mb-3 col-xs-12 col-sm-6">
                          <label
                            htmlFor="stock"
                            >Units In Stock
                          </label>
                          <input
                            id="stock"
                            name="stock"
                            type="text"
                            className="form-control validate"
                            required
                          />
                        </div>
                  </div>
                  
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-dummy mx-auto">
                  <i
                    className="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick={()=>document.getElementById('fileInput').click()}
                  ></i>
                </div>
                <div className="custom-file mt-3 mb-3">
                  <input id="fileInput" type="file" style={{display:"none"}}/>
                  <input
                    type="button"
                    className="btn btn-primary btn-block mx-auto"
                    value="UPLOAD PRODUCT IMAGE"
                    onclick={()=>document.getElementById('fileInput').click()}
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="tm-footer row tm-mt-small">
        <div className="col-12 font-weight-light">
          <p className="text-center text-white mb-0 px-4 small">
            Copyright &copy; <b>2018</b> All rights reserved. 
            
            Design: <a rel="nofollow noopener" href="https://templatemo.com" className="tm-footer-link">Template Mo</a>
        </p>
        </div>
    </footer> 
    </>
  )
}

export default AddProduct;