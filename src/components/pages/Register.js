import React from "react";
import "./signup.css";
export default function Register() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      ></link>
      {/* <nav className="navbarr">
        <ul className="navbar-nav">
          <li className="logo">
            <img src="imgs/logo.png" className="nav-logo" alt="" />
          </li>
          <li className="nav-item">
            <a href="profile.html" className="nav-link">
              <i className="fa-solid fa-user nav-icon"></i>
              <span className="link-text">Profile</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="dashboard.html" className="nav-link">
              <i className="fa-solid fa-list nav-icon"></i>
              <span className="link-text">Dashboard</span>
            </a>
          </li>
        </ul>
      </nav> */}
      <div className="profi">
        <div className="header">
          <div className="headings">
            {/* <h1 className="heading">Your Profile</h1> */}
            <h3 className="welcome-msg">Welcome, John Doe</h3>
          </div>
          <div className="profile-image">
            <img src="imgs/profile2.jpg" alt="" />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-lg-6 info">
              <img src="imgs/profile2.jpg" alt="" />
              <h1>John Doe</h1>
              <div className="row">
                <div className="col-lg-5 col-sm-5 box">
                  <i className="fa-solid fa-coins fa-2x"></i>

                  <p>Points</p>
                </div>
                <div className="col-lg-5 col-sm-5 box">
                  <i className="fa-solid fa-graduation-cap fa-2x"></i>
                  <p>College</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-sm-5 box">
                  <i className="fa-solid fa-at fa-2x"></i>
                  <p>Email</p>
                </div>
                <div className="col-lg-5 col-sm-5 box">
                  <i className="fa-solid fa-phone fa-2x"></i>
                  <p>Phone</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 update">
              <div className="form-div">
                <div className="form-title">
                  <h1>Update Your Info</h1>
                </div>
                <div className="form">
                  <form>
                    <div className="mb-3">
                      <label for="InputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="InputCollege" className="form-label">
                        College
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="InputCollege1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="InputPhone" className="form-label">
                        Phone No.
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="InputPhone1"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="InputTechid" className="form-label">
                        Tech Id
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="InputTechId1"
                      />
                    </div>
                    <div className="btn-div">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://kit.fontawesome.com/fabe41c2f7.js"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js"
        integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js"
        integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK"
        crossorigin="anonymous"
      ></script>
    </>
  );
}
