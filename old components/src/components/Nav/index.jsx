// import { NavLink } from "react-router-dom";
import "./index.css";

export const Navbar = () => {
  return (
    <>
      <nav
        class="navbar fixed-top navbar-light bg-light pb-3"
        // style={{ backgroundColor: "#ffffff" }}
      >
        <a class="navbar-brand ms-5" href="/">
          Brand Name
        </a>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link cat" href="/">
              Category-1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link cat" href="/">
              Category-2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link cat" href="/">
              Category-3
            </a>
          </li>
        </ul>
        <ul class="nav justify-content-right me-5 gap-4">
          <li class="nav-item">
            <i class="bi bi-search me-5" style={{ fontsize: "1.5rem" }}></i>
          </li>
          <li class="nav-item">
            <i class="fas fa-person">dadksa</i>
          </li>
          <li class="nav-item">
            <i class="fas fa-cart3"></i>
          </li>
          <li>
            <i class="fas fa-list"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};
