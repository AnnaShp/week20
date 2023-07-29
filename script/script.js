
// переменные для работы
let inputNumber;
let id = inputNumber;
let btn = document.getElementById('btn_find');
let info = document.getElementById('info');
let error = document.getElementById('err');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    clearFields();
    search();
})

// функции поиска людей
async function findPeople() {
    const response = await fetch(`https://swapi.dev/api/people/${inputNumber}/`);
    const people = await response.json();
    try {
        if (response.ok && inputNumber <= 10) {
            info.textContent = 'Name: ' + people.name;
        }
        else {
            error.textContent = 'Ошибка 404: введите число меньше указанного.';
        }
    }
    catch (err) {
        error.textContent = `Ошибка: ${err.message}`;
        throw err;
    }
    finally {
        console.log(people);
    }
}
// планет
async function findPlanet() {
    const response = await fetch(`https://swapi.dev/api/planets/${inputNumber}/`);
    const planets = await response.json();
    try {
        if (response.ok && inputNumber <= 10) {
            info.textContent = `Planet name: ` + planets.name;
        }
        else {
            error.textContent = 'Ошибка 404: введите число меньше указанного';
        }
    }
    catch (err) {
        error.textContent = `Ошибка: ${err.message}`;
        throw err;
    }
    finally {
        console.log(planets);
    }
}
//фильмов
async function findFilms() {
    const response = await fetch(`https://swapi.dev/api/films/${inputNumber}/`);
    const films = await response.json();
    try {
        if (response.ok && inputNumber <= 10) {
            info.textContent = `Movie title: ` + films.title;
        }
        else {
            error.textContent = 'Ошибка 404: введите число меньше указанного';
        }
    }
    catch (err) {
        error.textContent = `Ошибка: ${err.message}`;
        throw err;
    }
    finally {
        console.log(films);
    }
}

// функция вывода инфо на экран
function search(id) {
    let selectValue = document.getElementById('select_id').value;
    inputNumber = document.getElementById('number').value;
    if (!selectValue) {
        error.textContent = 'Выберите вариант из списка';
    }
    else if (selectValue === 'peoples') {
        findPeople();
    }
    else if (selectValue === 'planets') {
        findPlanet();
    }
    else if (selectValue === 'films') {
        findFilms();
    }
}

function clearFields() {
    info.textContent = '';
    error.textContent = '';
    console.clear();
}