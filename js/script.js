/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";




let personalMovieDB = {
    count: 0,
    movies: {},
    actors:{},
    genres:[],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?","0"); 
        while(personalMovieDB.count == ''|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.start();
        }
    },
    rememberMyFilms: function () {
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
      },
    detectPersonalLevel: function () {
        if(personalMovieDB.count < 10 ) {
            console.log("Просмотрено довольно мало фильмов.");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10 ) {
            console.log("Вы классический зритель.");
        } else if (personalMovieDB.count >= 30 && personalMovieDB.count >= 0 )  {
            console.log("Вы киноман.");
        } else {console.log("Произошла ошибка.");}
        },
    showMyDB:   function (hidden) {
            if(!hidden){
            console.log(personalMovieDB);
            }
        },
    writeYourGenres:   function writeYourGenres() {
            for(let i = 0; i < 3; i++){
                const a = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
                if(a != null  && a != '') {
                personalMovieDB.genres[i] = a;
                } else {
                    console.log("Вы ввели некоректные данные или не ввели их вовсе");
                    i = i -1;
                }
            }
            personalMovieDB.ganres.forEach ((item,i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`) ;
            });
            },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat ) {
            personalMovieDB.privat = false ;
        } else {
            personalMovieDB.privat = true ;
        }
    }       

};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);











