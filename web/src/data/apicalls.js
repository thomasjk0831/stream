const API_KEY = "6d0c4c775463ca5290316fa0398e562b";

const apiCalls = [
   { title: "Family", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=14` },
   { title: "Sci-Fi", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=878` },
   { title: "Thriller", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=53` },
   { title: "Animated", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=16` },
   { title: "Action", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28` },
   { title: "Comedy", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35` },
   { title: "Horror", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27` },
   { title: "Romance", fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749` },

]

export default apiCalls