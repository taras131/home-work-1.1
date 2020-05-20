"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","0");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
};
for(let i = 0; i<2; i++){
   const a = prompt("Один из последних просмотренных фильмов",""),
         b = prompt("На сколько оцените его?","");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("eror");
        i--;
    }
    personalMovieDB.movies[a] = b;
}
if(personalMovieDB.count < 10 && numberOfFilms >= 0) {
    console.log("Просмотрено довольно мало фильмов.");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10 ) {
    console.log("Вы классический зритель.");
} else if (personalMovieDB.count >= 30 && personalMovieDB.count >= 0 )  {
    console.log("Вы киноман.");
} else {console.log("Произошла ошибка.");}

console.log(personalMovieDB);