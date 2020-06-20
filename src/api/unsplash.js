import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 4hiSCaSSIa3of7VUy9132sIV8EnxVidxVDtEFh8jaDE",
  },
});
