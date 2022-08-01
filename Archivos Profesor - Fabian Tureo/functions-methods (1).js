// const a = 1;
// const b = 2;
// const c = 3;
// const d = 4;

// let suma;
// suma = a + b;
// console.log("Primera suma", suma);
// suma = c + d;
// console.log("Segunda suma", suma);

// function sum(a, b) {
//     console.log("Suma de a + b", a + b);
// }
// sum(c, d); // 3

// const sumWithArrowFunction = (a, b) => {
//     return a + b;
// };
// console.log("Suma con arrow function", sumWithArrowFunction(a, b));

// const sumImplicit = (c, d) => c + d;

// console.log("Suma implicita", sumImplicit(c, d));

const users = [
    {
        id: 1,
        userName: "Fabi",
        userLastName: "Tureo",
    },
    {
        id: 2,
        userName: "Melina", // Le Aplico toLowerCase -- melina
        userLastName: "Lencinas",
    },
    {
        id: 3,
        userName: "Guillermo",
        userLastName: "Scharf",
    },
    {
        id: 4,
        userName: "Emi",
        userLastName: "Salias",
    },
];

// const usersNames = [];

// for (let i = 0; i < users.length; i++) {
//     usersNames.push(users[i].userName);
// }
// console.log("Array de Nombres", usersNames);

// const usersNamesMap = users.map((user) => {
//     return user.userName;
// });
// console.log("Username con map", usersNamesMap);

// const usersNamesMapImplicit = users.map((user) => user.userName);
// console.log("Implicit", usersNamesMapImplicit);

// const usersLastNames = users.map(
//     (user) => `${user.userName} ${user.userLastName}`
// );
// console.log("Users", usersLastNames);

const usersLessThanThree = users.filter((user) => user.id < 3);
console.log("Users less than 3", usersLessThanThree);

const usersGreaterThanTwo = users.filter((user) => 2 < user.id);
console.log("Users greater than 2", usersGreaterThanTwo);

const obtainUser = users.filter(
    (user) => user.userName.toLowerCase() === "guillermo"
);
console.log("ObtainUser", obtainUser);

const gameList = [
    {
        title: "Returnal",
        platform: "PS5",
        price: 79,
    },
    {
        title: "Resident Evil Village",
        platform: "PC",
        price: 59,
    },
    {
        title: "Little Nightmares 2",
        platform: "PC",
        price: 20,
    },
];

const gameTitles = gameList.map((game) => game.title);
console.log("Game Titles", gameTitles);

const gamePrices = gameList.filter((game) => game.price < 60);
console.log("Game Prices", gamePrices);

const gamesForBuy = gameList
    .filter((game) => game.price < 60)
    .map((game) => game.title);

console.log("Games for buy", gamesForBuy);
