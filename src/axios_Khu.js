import axios from "axios";

const instance = axios.create({
  baseURL: "http://clouduni.mn:3000/api/v1/",
});

export default instance;
