import React from "react";
import { Outlet, useNavigate } from "react-router-dom";


const Home = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => Navigate("/home/personalDetails")}
                  >
                    PersonalDetails Form
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => Navigate("/home/showDetails")}
                  >
                    show Profile
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button
                  className="btn btn-primary"
                  onClick={() => Navigate("/showAllEmployee")}
                >
                  ALL Employee
                </button>
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => Navigate("/")}
                >
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
