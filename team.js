const team = [ {
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
} ];

function printLeaguePlayer () {
    for ( i=0; i<team.length;i++)
    {team[i].favoriteVideoGame=="League of Legends" 
    ? console.log(team[i].name+" plays "+team[i].favoriteVideoGame):console.log()
    }}
    printLeaguePlayer()