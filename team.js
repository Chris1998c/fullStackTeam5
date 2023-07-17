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


