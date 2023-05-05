import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key: '5d1b4aa4ccf045db89c470cff9eeaa9d'
  }
});