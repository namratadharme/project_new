import React, { useEffect, useState } from "react";
import "./login.css";
import { Userlogin } from "./Services/User.services";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleInputfield1(e) {
    setEmail(e.target.value);
  }
  function handleInputfield2(e) {
    setPassword(e.target.value);
  }
  async function handleLoginfield() {
    if (valid()) {
      try {
        setLoading(true);
        const token = await Userlogin(email, password);
        console.log(token);
        localStorage.setItem("token", token);
        navigate("/home");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
    }
  }

  function valid() {
    if (!email.includes("@")) {
      setError("email contain @");
      return false;
    }
    if (!email.includes(".")) {
      setError("email contain .");
      return false;
    }
    if (password.length < 8) {
      setError("password contain atleast 8 digit");
      return false;
    } else {
      setError(false);
      return true;
    }
  }

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, password]);

  return (
    <div className="container">
      <h1 className="heading">Log In</h1>
      <label className="texttype1">Email</label>
      <input
        type="text"
        className="inputField"
        placeholder="Email"
        onChange={handleInputfield1}
      ></input>
      <label className="texttype2">Password</label>
      <input
        type="password"
        className="inputField"
        placeholder="Password"
        onChange={handleInputfield2}
      ></input>
      <p>{error ? error : ""}</p>
      <button className="button" onClick={handleLoginfield} disabled={!enable}>
        {loading ? "loading" : "Log in"}
      </button>
    </div>
  );
}

export default Loginpage;
