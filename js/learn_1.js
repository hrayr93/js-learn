"use strict";

let numberOfFilms =+prompt("Сколько филмов вы уже посмотрели");
const personalMovieDB = {
    count :numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let ask_1 = prompt("Один из последних просмотенных филмов?"),
    ask_2 = prompt("На сколько оцените его?"),
    ask_3 = prompt("Один из последних просмотенных филмов?"),
    ask_4 = prompt("На сколько оцените его?");

    personalMovieDB.movies[ask_1] = ask_2;
    personalMovieDB.movies[ask_3] = ask_4;
    console.log(personalMovieDB);