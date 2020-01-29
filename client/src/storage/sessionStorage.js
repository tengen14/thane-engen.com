import recipeSeed from "./recipeSeed.json";


let sessionStorage = window.sessionStorage;


sessionStorage.recipes = JSON.stringify(recipeSeed);

export default sessionStorage;


