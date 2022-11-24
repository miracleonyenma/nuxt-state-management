// // ./composables/moviesState.js

// // list of movies
// export const useMovies = () =>
//   useState("movies", () => [
//     {
//       title: "Black Panther 2",
//       price: 20,
//     },
//     {
//       title: "Avatar 2: The way of the water",
//       price: 20,
//     },
//     {
//       title: "Black Adam",
//       price: 20,
//     },
//   ]);

// // function to get movies in wishlist
// export const useWishlist = () => useState("wishlist", () => []);

// // function to add and remove movie to wishlist
// export const useSetWishlist = ({ type, movie }) => {
//   return useState("set-wishlist", () => {
//     const wishlist = useWishlist();
//     switch (type) {
//       // add movie to wishlist
//       case "add":
//         wishlist.value.push(movie);
//         break;

//       // remove movie from wishlist
//       case "remove":
//         wishlist.value.splice(wishlist.value.indexOf(movie), 1);
//         break;

//       default:
//         console.log("Invalid type");
//         break;
//     }
//   });
// };

// // function to check if movie is in wishlist
// export const useIsInWishlist = () => {
//   return (movie) => useWishlist().value.includes(movie);
// };

// // function to calculate total price of movies in wishlist
// export const useTotalPrice = () =>
//   computed(() => {
//     return useWishlist().value.reduce((total, movie) => {
//       return total + movie.price;
//     }, 0);
//   });
