const team = [ {
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
} ];

function printTeamInAgeOrder(team) {
    
    team.sort((a, b) => a.age - b.age);
  
   for (const member of team) {
      console.log(`${member.name} ${member.age}`);
    }
  }
  




