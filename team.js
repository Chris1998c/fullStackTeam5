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
  
    for (let i = 0; i < teamArray.length; i++) {
      for (let j = i + 1; j < teamArray.length; j++) {
        if (teamArray[i].name === teamArray[j].name && !duplicateNames.includes(teamArray[i].name)) {
          duplicateNames.push(teamArray[i].name);
        }
      }
    }
  
    return duplicateNames;
  }

  let duplicateNames = findMembersWithSameName(team);
  
  console.log("Duplicate names:");
  console.log(duplicateNames);
  


