// // ./composables/store.js

// // list of movies
// const movies = ref([
//   {
//     title: "Black Panther 2",
//     price: 20,
//   },
//   {
//     title: "Avatar 2: The way of the water",
//     price: 20,
//   },
// ]);

// // movies wishlist
// const wishlist = ref([]);

// // add movie to wishlist
// const addToWishlist = (movie) => {
//   wishlist.value.push(movie);
// };

// // remove movie from wishlist
// const removeFromWishlist = (movie) => {
//   wishlist.value.splice(wishlist.value.indexOf(movie), 1);
// };

// // check if movie is in wishlist
// const isInWishlist = (movie) => {
//   return wishlist.value.includes(movie);
// };

// // calculate total price of movies in wishlist
// const totalPrice = computed(() => {
//   return wishlist.value.reduce((total, movie) => {
//     return total + movie.price;
//   }, 0);
// });

// // export all the functions and variables
// export const useMovies = () => {
//   return {
//     movies,
//     wishlist,
//     addToWishlist,
//     removeFromWishlist,
//     isInWishlist,
//     totalPrice,
//   };
// };
