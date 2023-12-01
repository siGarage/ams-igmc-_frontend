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
    let payload = values;
    let token=auth;
    let bearer='bearer'
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
        .get("getGroup")
        .then((response) => {
          resolve(response);

        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }


  static deleteGroup(id,auth) {
    let contentid = id;
    let token=auth;
    let bearer='bearer'
    const autherizationToken=bearer + " " + token;
    instance.defaults.headers.common['authorization']=autherizationToken;
    return new Promise((resolve) => {
      instance
        .delete("deleteGroup",{params: {id:contentid}})
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}