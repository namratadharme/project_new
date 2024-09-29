import axios from "axios";
import { loginEndpoint, registrationEndpoint } from "../urls/urls";

async function Userlogin(email, password) {
  return new Promise((resolve, reject) => {
    axios
      .post(loginEndpoint, { email, password })
      .then((response) => {
        const token = response.data.token;
        console.log(token);

        resolve(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

async function Userregistration(email, password, confirmpwd) {
  return new Promise((resolve, reject) => {
    axios
      .post(registrationEndpoint, { email, password, confirmpwd })
      .then((response) => {
        console.log("registration successful", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export { Userlogin, Userregistration };
