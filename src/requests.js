const API_KEY = "fe905969a0eed220e96889b7aca7d042";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&Language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}& with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}& language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}& with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}& with_genres=99`,
    fetchBestMovies: `/discover/movie?api_key=${API_KEY}&sort_by=vote_average.desc`
}

export default requests;