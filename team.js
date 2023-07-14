const team = [ {
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
} ];

function havePet(team) {
    team.forEach(i => {
        if (i.petName.length>0) {
            console.log(i.name + " has a pat named " + i.petName)
        }
        
    });
}
