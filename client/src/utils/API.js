export const searchRestaurants = (query) => {
    return fetch(`https://rapidapi.com/ptwebsolution/api/worldwide-restaurantsq=${query}`);
};

// export const searchZipCode = (query) => {
//     return fetch(`q=${query}`);
// };