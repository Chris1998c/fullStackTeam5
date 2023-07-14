
const team = [{
    name: "Christian",
    surname:"Conte",
    age:"24",
    city:"corigliano-rossano",
    hobby:"hobby",
    favoriteFood:"Carbonara",
    favoriteVideoGame: "call of duty",
    favoriteFilm: "HarryPotter",
    favoriteBook: "HarryPotter",
    petName: "",
}]

/*funzione christian*/
let sumAge = 0;
for (let i = 0; i < team.length; i++) {
    sumAge += team[i].age;
}

const averageAge = sumAge / team.length;
console.log("Team middle age: " + averageAge);

/*fine funzione christian*/