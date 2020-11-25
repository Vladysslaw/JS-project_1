
let numberOfFiles;

function start() {
    numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFiles == '' || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = a;
    }
}
writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
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
}

rememberMyFilms();



console.log(personalMovieDB);