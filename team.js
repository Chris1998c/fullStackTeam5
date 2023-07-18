const team = [ {
    name = "Vincenzo"
    surname = "Federico"
    age = 28
    city = "Palermo"
    hobby = "calcio"
    favoriteFood = "pasta"
    favoriteVideoGame = "Diablo"
    favoriteFilm = "Limitless"
    favoriteBook = "HarryPotter"
    petName = "Argo"
} ];

function printTeamInAgeOrder(team) {
    
    team.sort((a, b) => a.age - b.age);
  
   for (const member of team) {
      console.log(`${member.name} ${member.age}`);
    } 
  }
  printTeamInAgeOrder(team)
  
let sumAge = 0;
for (let i = 0; i < team.length; i++) {
    sumAge += team[i].age;
}


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


const averageAge = sumAge / team.length;
console.log("Team middle age: " + averageAge);


function printLeaguePlayer () {
    for ( i=0; i<team.length;i++)
    {team[i].favoriteVideoGame=="League of Legends" 
    ? console.log(team[i].name+" plays "+team[i].favoriteVideoGame):console.log()
    }}
    printLeaguePlayer()


function havePet(team) {
    team.forEach(i => {
        if (i.petName.length>0) {
            console.log(i.name + " has a pat named " + i.petName)
        } 
        
    });
} 
havePet(team)


