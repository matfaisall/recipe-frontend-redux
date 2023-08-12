import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: "#EFC81A" }}>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: 340 }}
        >
          <h1 className="fw-normal mb-3">Eat, Cook, Repeat</h1>
          <p className="text-secondary">
            Share Your Best Recipe By Uploading Here !
          </p>
        </div>
        <div className=" d-flex  justify-content-center py-3">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Learn More
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
