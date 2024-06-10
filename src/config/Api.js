import axios from "axios";
const instance = {
  method: "GET",
  url: "https://spotify81.p.rapidapi.com",
  params: { q: "Frozen" },
  headers: {
    "X-RapidAPI-Key": "11dc29b5d7msha0c09ca6980d3ddp107fd5jsnbd8f2f889a18",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  },
};

export default instance;
