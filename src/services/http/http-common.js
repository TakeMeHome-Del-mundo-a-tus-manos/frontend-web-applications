import axios from "axios";

export default axios.create({
  baseURL: "https://takemehome-api.herokuapp.com/api/v1",
  headers: { "Content-type": "application/json" },
});