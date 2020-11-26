
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i < 2; i++) {
            /* let a = prompt(`Ваш любимый жанр под номером ${i}`);
            if (a != null && a != '') {
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            } */

            let a = prompt(`Введите ваши любимые жанры через запятую`);
            if (a != null && a != '') {
                personalMovieDB.genres = a.split(', ');
            } else {
                i--;
            }
        }
        

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else { 
                console.log('erroe');
                i--;
            }
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        } else {
            personalMovieDB.privat = true;
            console.log(personalMovieDB.privat);
        }
    }
};
personalMovieDB.writeYourGenres();
