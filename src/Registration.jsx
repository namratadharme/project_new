import React, { useEffect, useState } from "react";
import "./registration.css";
import { Userregistration } from "./Services/User.services";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpwd, setConfirmpwd] = useState("");
  const [enable, setEnable] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate("");

  function handleInput1(e) {
    setEmail(e.target.value);
  }
  function handleInput2(e) {
    setPassword(e.target.value);
  }
  function handleInput3(e) {
    setConfirmpwd(e.target.value);
  }
  async function handleSignup() {
    if (valid()) {
      try {
        setLoading(true);
        const reg = await Userregistration(email, password, confirmpwd);
        console.log("registration successful", reg);
        navigate("/login");
      } catch {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("validation failed");
    }
  }
  function valid() {
    if (password.length < 8) {
      setError("password contain atleast 8 digit");
      return false;
    }
    if (password !== confirmpwd) {
      setError("password does not match");
      return false;
    } else {
      setError(false);
      return true;
    }
  }
  useEffect(() => {
    if (email !== "" && password !== "" && confirmpwd !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [email, password, confirmpwd]);

  return (
    <>
      <div className="container">
        <h1 className="heading">Sign up</h1>
        <label className="texttype">Email</label>
        <input
          type="text"
          className="inputField"
          placeholder="Email"
          onChange={handleInput1}
        ></input>
        <label className="texttype1">Password</label>
        <input
          type="password"
          className="inputField"
          placeholder="Password"
          onChange={handleInput2}
        ></input>
        <label className="texttype2">Confirm Password</label>
        <input
          type="password"
          className="inputField"
          onChange={handleInput3}
          placeholder="Confirm Password"
        ></input>
        <p>{error ? error : ""}</p>
        <button className="button" onClick={handleSignup} disabled={!enable}>
          {loading ? "loading" : "Sign up"}
        </button>
      </div>
    </>
  );
}

export default Registration;
