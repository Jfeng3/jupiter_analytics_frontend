import axios from "axios";
export default axios.create({
  baseURL: "https://jupiter-analytics-backend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
