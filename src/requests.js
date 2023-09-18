const API_KEY="aa7de0244e7e4f88163e5082fb1183a1";

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMovieDetails: (movieId) => `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    fetchMovieCredits: (movieId) => `/movie/${movieId}/credits?api_key=${API_KEY}`,
    fetchMovieOriginals: `/discover/movie?api_key=${API_KEY}&with_companies=213`,

};

export default requests;
