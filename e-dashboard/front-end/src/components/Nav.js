import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    console.log("Okay Logout is calling !!");
    localStorage.clear();
    navigate("signup");
  };
  return (
    <div>
      <img
        src="https://dummyimage.com/150x50/000/fff.png&text=LOGO"
        alt="Dummy Logo"
        className="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>{" "}
          <li>
            <Link onClick={logout} to="/signup">
              Logout 
            </Link>
          </li>{" "} ( { JSON.parse(auth).name } )
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>{" "}
          <li>
            <Link to="/login">Login</Link>
          </li>{" "}
        </ul>
      )}
      {/* <li>
        <Link to="/parent">Ex. Parent</Link>
      </li>
      <li>
        <Link to="/child">Ex. Child</Link>
      </li> */}
    </div>
  );
};

export default Nav;
