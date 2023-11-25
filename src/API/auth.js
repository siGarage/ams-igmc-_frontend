import axios from "axios";
import Environment from "../enviroment";
const instance = axios.create({
  baseURL: Environment.USER_URL,
  headers: { "Content-Type": "application/json" },
});

const genericError = {
  message: "Something went wrong",
  status: 500,
};

function defaultCatch(error, resolve) {
  if (error.response) {
    resolve(error.response);
  } else if (error.request) {
    resolve(error.request);
  } else {
    resolve(genericError);
  }
}

export default class Auth {
  //log in
  static login(values) {
    let payload = values;
    return new Promise((resolve) => {
      instance
        .post("userLogin", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}