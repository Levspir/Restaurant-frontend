import axios from "axios";

const instance = axios.create({
  baseURL: "https://restaurant-2484c.firebaseio.com/"
});

export default instance;
