import axios from "axios";
import Environment from "../enviroment";
const instance = axios.create({
  baseURL: Environment.USER_URL,
  headers: { "Content-Type": "application/json",'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjU2NDU0ZTAyYjJkN2M5MzNkNmNmMzQwIiwidGlkIjoiYjlmNzQ3ZmY2ZDk4YTU5MzY0MTkyZDczZmUwNWUzOGRkOTZhNzA5OCIsImlhdCI6MTcwMTE2MTg3MiwiZXhwIjoxNzAxMjQ4MjcyfQ.oXGFutj2Av4vCQ1zLqaENVVl7swbasK7BD1VpMzhzRo' },
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

export default class Group {
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
  static getGroup() {
    return new Promise((resolve) => {
      instance
        .get("getGroup")
        .then((response) => {
          resolve(response);

        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }


  static deleteGroup(id) {
    let payload = id;
    return new Promise((resolve) => {
      instance
        .delete("deleteGroup",{params: {id:payload}})
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}