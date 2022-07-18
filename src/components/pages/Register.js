import React from "react";
import "./signup.css";
export default function signup() {
  return (
    <>
      <div className="background">
        <section className="register-section">
          <div className="cont">
            <div className="form">
              <form action="/register" method="POST">
                <input
                  type="text"
                  className="write"
                  name="name"
                  id="name"
                  placeholder="User-name..."
                  required
                />

                <input
                  type="password"
                  className="write"
                  name="password"
                  id="password"
                  placeholder="password..."
                  required
                />

                <input
                  type="password"
                  className="write"
                  name="password2"
                  id="password2"
                  placeholder="confirm password..."
                  required
                />

                <div className="btns">
                  <button className="btn" type="submit">
                    Register
                  </button>
                </div>
                <p style="margin: auto; font-size: 25px; color: #7a7893">OR</p>
              </form>
              <div
                style="
              display: flex;
              align-items: center;
              justify-content: space-evenly;
            "
              >
                <a className="google" href="/auth/google">
                  <i className="fab fa-google" style="margin-right: 10px"></i>
                  GOOGLE
                </a>
                <a
                  className="google"
                  href="/auth/facebook"
                  style="background-color: #5b7bd5"
                >
                  <i className="fab fa-facebook" style="margin-right: 10px"></i>
                  FaceBook
                </a>
              </div>
              <p
                style="
              font-size: 1.1rem;
              text-align: center;
              margin-bottom: 10px;
              color: white;
            "
              >
                Already have a account?
                <a href="/login">
                  <strong>Login</strong>
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
