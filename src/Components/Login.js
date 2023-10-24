import React, { useState }  from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission with formData.username and formData.password
      console.log('Submitted data:', formData);
    };
  return (
    <>
        <div>
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
                <a className="nav-link" href="products.html">
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
          </div>
        </div>
      </nav>
    </div>

    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-12 mx-auto tm-login-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
              <form onSubmit={handleSubmit} className="tm-login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            className="form-control validate"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control validate"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-4">
          <button
            type="submit"
            className="btn btn-primary btn-block text-uppercase"
          >
            Login
          </button>
        </div>
        <button className="mt-5 btn btn-primary btn-block text-uppercase">
          Forgot your password?
        </button>
      </form>
              </div>
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

export default Login;