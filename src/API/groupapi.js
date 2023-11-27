import axios from "axios";
import Environment from "../enviroment";
const instance = axios.create({
  baseURL: Environment.USER_URL,
  headers: { "Content-Type": "application/json",'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU2NDU0ZTAyYjJkN2M5MzNkNmNmMzQwIiwidGlkIjoiOTU3ODM2YmMzZDYzNWZlZWU5MTI1YTZmNjdiYWJhMjQzZGE1OTk2NSIsImlhdCI6MTcwMTA3NDE2MiwiZXhwIjoxNzAxMTYwNTYyfQ.n6Sg9qToevoT-uOm6gUjssgL4x0xlESFYaY4Ealh-wM' },
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
  static createGroup(values) {
    let payload = values;
    return new Promise((resolve) => {
      instance
        .post("createGroup", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}