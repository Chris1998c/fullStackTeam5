
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
}];

function printTeamInAgeOrder(team) {
    
    team.sort((a, b) => a.age - b.age);
  
   for (const member of team) {
      console.log(`${member.name} ${member.age}`);
    }
  }
  
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

} ];

function printLeaguePlayer () {
    for ( i=0; i<team.length;i++)
    {team[i].favoriteVideoGame=="League of Legends" 
    ? console.log(team[i].name+" plays "+team[i].favoriteVideoGame):console.log()
    }}
    printLeaguePlayer()

} ] 

function havePet(team) {
    team.forEach(i => {
        if (i.petName.length>0) {
            console.log(i.name + " has a pat named " + i.petName)
        }
        
    });
}

