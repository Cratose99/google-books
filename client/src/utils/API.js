import axios from "axios";

export default {
  getBooks: function(query) {
    console.log("in api.js ",query)
    
    return axios.get("/api/books", { params: { query } });
  },

};
