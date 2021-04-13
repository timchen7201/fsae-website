import axios from "axios";
// Modify server url here
// const baseURL = "http://localhost:4000";
const baseURL = "https://tidy-outlet-310014.df.r.appspot.com";
const request = axios.create({ baseURL: baseURL });

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.error(error);
    }
    // Customize error handling
    return Promise.reject(error);
  }
);

export default request;
