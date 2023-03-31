import axios from "axios";
// base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// instance.get('/foo-bar');

export default instance;