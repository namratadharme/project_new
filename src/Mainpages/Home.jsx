import React from "react";
import { useNavigate } from "react-router-dom";
//import Loginpage from "../Login";

function Homepage() {
  const navigateTo = useNavigate();
  function handleLogout() {
    localStorage.removeItem("token");
    navigateTo("/login");
  }

  return (
    <>
      <div>
        welcome to the homepage
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Homepage;
