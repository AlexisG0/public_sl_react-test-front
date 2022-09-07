import axios from "axios";

const slaxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  responseType: "json",
});

export default slaxios;
