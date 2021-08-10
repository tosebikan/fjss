import axios from "axios";
import { BASE_URL } from "./config";

export const apiFunctions = {
  getCountDown: async () => get("/countdown"),
  getProjects: async () => get("/projects"),
  getMedia: async () => get("/media-images"),
  getPeople: async () => get("/people"),
  getProducts: async () => get("/products"),
  postjobApplication: async fd => post("/job-application", fd)
};

const get = path => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .get(`${BASE_URL}${path}`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          console.log("api error>", error.response);
          reject({
            status: 500,
            message: error.response
          });
        });

      setTimeout(
        () =>
          reject({
            status: 500,
            msg: "Connection error, try again later"
          }),
        18000
      );
    });
  } catch (err) {}
};

const post = (path, fd) => {
  try {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL}${path}`, fd, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          console.log("POST ERROR>", error.response);

          reject({
            status: 500,
            msg: error.response
          });
        });

      setTimeout(
        () =>
          reject({
            status: 500,
            msg: "Connection error, please try again later"
          }),
        18000
      );
    });
  } catch (err) {}
};

// module.exports = apiFunctions;
