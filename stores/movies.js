// ./stores/movies.js

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    // list of movies
    movies: [
      {
        title: "Black Panther 2",
        price: 20,
      },
      {
        title: "Avatar 2: The way of the water",
        price: 20,
      },
      {
        title: "Black Adam",
        price: 20,
      },
    ],
    // movies wishlist
    wishlist: [],
  }),

  getters: {
    // get total price of movies in wishlist
    totalPrice: (state) => {
      console.log({ totalPrice: state.wishlist });
      return state.wishlist.reduce((total, movie) => {
        return total + movie.price;
      }, 0);
    },
  },

  actions: {
    // add movie to wishlist
    addToWishlist(movie) {
      this.wishlist.push(movie);
    },

    // remove movie from wishlist
    removeFromWishlist(movie) {
      this.wishlist.splice(this.wishlist.indexOf(movie), 1);
    },

    // check if movie is in wishlist
    isInWishlist(movie) {
      return this.wishlist.includes(movie);
    },
  },
});
