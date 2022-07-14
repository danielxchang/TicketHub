import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // on the server
    return axios.create({
      baseURL: "http://www.tickethub.lol",
      headers: req.headers,
    });
  } else {
    // on the browser
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
