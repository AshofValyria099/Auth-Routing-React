import axios from "axios";

export const axiosinstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosinstance.interceptors.response.use(
  (response) => {
    console.log("in interceptors->", response);
    return response
  },
  (error) => {
    console.log("interceptor err->",error)
  },
);
