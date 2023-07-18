<<<<<<< HEAD

const team = [
{
    name : "Alessio",
    surname : "Natale",
    age : 23,
    city : "Avellino",
    hobby : "calcio",
    favoriteFood : "pasta",
    favoriteVideoGame : "Minecraft",
    favoriteFilm : "prova a prendermi",
    favoriteBook : "HarryPotter",
    petName : "pippo"
}, 
{

    name: "Curtis",
    surname: "Ducasse",
    age: 24,
    city: "Palermo",
    hobby: "Videogiochi",
    favoriteFood: "pasta",
    favoriteVideoGame: "League of Legends",
    favoriteFilm: "Memento",
    favoriteBook: "L'arte di amare",
    petName: "Coco",
} ,
{
    name: "Sviatoslav",
    surname: "Larionov",
    age: 19,
    city: "Biella",
    hobby: "Skate",
    favoriteFood: "Rice",
    favoriteVideoGame: "CS:GO",
    favoriteFilm: "Batman",
    favoriteBook: "Demian",
    petName: "",
},
{
    name: "Vincenzo",
    surname: "Federico",
    age: 28,
    city: "Palermo",
    hobby: "calcio",
    favoriteFood: "pasta",
    favoriteVideoGame: "Diablo",
    favoriteFilm: "Limitless",
    favoriteBook: "HarryPotter",
    petName: "Argo",
},
{
    name: "Christian",
    surname:"Conte",
    age: 24,
    city:"corigliano-rossano",
    hobby:"hobby",
    favoriteFood:"Carbonara",
    favoriteVideoGame: "call of duty",
    favoriteFilm: "HarryPotter",
    favoriteBook: "HarryPotter",
    petName: "",
}]
=======
const team = [ {
    name: "Vincenzo"
    surname: "Federico"
    age: 28
    city: "Palermo"
    hobby: "calcio"
    favoriteFood: "pasta"
    favoriteVideoGame: "Diablo"
    favoriteFilm: "Limitless"
    favoriteBook: "HarryPotter"
    petName: "Argo"
} ];

>>>>>>> origin/Vincenzo

<<<<<<< HEAD

let sumAge = 0;
for (let i = 0; i < team.length; i++) {
    sumAge += team[i].age;
}
=======
function findMembersWithSameName(teamArray) {
  let duplicateNames = [];
  let singleNames = [];

  for (let i = 0; i < teamArray.length; i++) {
    if (!singleNames.includes(teamArray[i].name)) {
      singleNames.push(teamArray[i].name);
    } else {
      duplicateNames.push(teamArray[i].name);
    }
  }

  return duplicateNames;
}

let duplicateNames = findMembersWithSameName(team);

console.log("Duplicate names:");
console.log(duplicateNames); 
>>>>>>> origin/Vincenzo

const averageAge = sumAge / team.length;
console.log("Team middle age: " + averageAge);

