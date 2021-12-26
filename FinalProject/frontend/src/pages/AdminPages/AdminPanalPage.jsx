import React from "react";
import "./AdminPanalPage.css";
import { Row, Col } from "react-bootstrap";
export default function AdminPanalPage() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossorigin="anonymous"
      />

      <div className="col-md-10 ">
        <div className="row ">
          <div className="col-xl-3 col-lg-6">
            <divs className="card l-bg-cherry">
              <div className="card-statistic-3 p-4">
                <div
                  className="card-icon card-icon-large"
                  style={{ fontSize: "110px" }}
                >
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="mb-4">
                  <a href="/admin/orderlist">
                    {" "}
                    <h5 style={{ color: "white" }} className="card-title mb-0">
                      New Orders
                    </h5>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">3,243</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      12.5% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </divs>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-blue-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-users"></i>
                </div>
                <div className="mb-4">
                  <a href="/admin/userlist">
                    <h5 style={{ color: "white" }} className="card-title mb-0">
                      Users
                    </h5>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">15.07k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      9.23% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-green"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="mb-4">
                  <a href="/admin/productlist">
                    <h5 style={{ color: "white" }} className="card-title mb-0">
                      Prodcuts
                    </h5>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">578</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      10% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-orange"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="mb-4">
                  <a href="/admin/returnslist">
                    <h5 style={{ color: "white" }} className="card-title mb-0">
                      Repots
                    </h5>
                  </a>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h2 className="d-flex align-items-center mb-0">$11.61k</h2>
                  </div>
                  <div className="col-4 text-right">
                    <span>
                      2.5% <i className="fa fa-arrow-up"></i>
                    </span>
                  </div>
                </div>
                <div
                  className="progress mt-1 "
                  data-height="8"
                  style={{ height: "8px" }}
                >
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
