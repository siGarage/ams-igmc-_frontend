import axios from "axios";
import Environment from "../enviroment";

const instance = axios.create({
  baseURL: Environment.USER_URL,
  headers: { "Content-Type": "application/json"},
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

  static createGroup(values,auth) {
    const payload = values;
    const token=auth;
    const bearer='bearer'
    const autherizationToken=bearer + " " + token;
    instance.defaults.headers.common['authorization']=autherizationToken;
    return new Promise((resolve) => {
      instance
        .post("createGroup", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }

  static getGroup(auth) {
    let token=auth;
    let bearer='bearer'
    const autherizationToken=bearer + " " + token;
    instance.defaults.headers.common['authorization']=autherizationToken;
    return new Promise((resolve) => {
      instance
        .get("getGroups")
        .then((response) => {
          resolve(response);

        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }


  static deleteGroup(value) {
    let bearer='bearer'
    console.log(value.id)
    const autherizationToken=bearer + " " + value.token;
    instance.defaults.headers.common['authorization']=autherizationToken;
    return new Promise((resolve) => {
      instance
        .delete("deleteGroup",{body: {id:value.id}})
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}