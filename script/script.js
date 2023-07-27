
// переменные для работы
let inputNumber;
let id = inputNumber;
let btn = document.getElementById('btn_find');
let info = document.getElementById('info');
let error = document.getElementById('err');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    search();
})

// функции поиска людей
async function findPeople() {
    const result = await fetch(`https://swapi.dev/api/people/${inputNumber}/`);
    const people = await result.json();
    info.textContent = `Name: ` + people.name;
}
// планет
async function findPlanet() {
    const response = await fetch(`https://swapi.dev/api/planets/${inputNumber}/`);
    const planets = await response.json();
    info.textContent = `Planet name: ` + planets.name;
}
//фильмов
async function findFilms() {
    const response = await fetch(`https://swapi.dev/api/films/${inputNumber}/`);
    const films = await response.json();
    info.textContent = `Movie title: ` + films.title;
}

// функция вывода инфо на экран
function search(id) {
    let selectValue = document.getElementById('select_id').value;
    inputNumber = document.getElementById('number').value;
    return new Promise((resolve, reject) => {
        if (!selectValue) {
            info.textContent = '';
            error.textContent = ''
        }
        else if (selectValue === 'peoples') {
            findPeople();
            resolve;
        }
        else if (selectValue === 'planets') {
            findPlanet();
            resolve;
        }
        else if (selectValue === 'films') {
            findFilms();
            resolve;
        }
        else {
            reject;
            error.textContent = 'Ошибка. Введите число меньше указанного';
        }
    })
}


// search()
//     .then(function (people) {
//         return people;
//     })
//     .then(function (planets) {
//         return planets;
//     })
//     .then(function findFilms() {
//         return films;
//     })
//     .catch(error)



