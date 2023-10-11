// переменные для работы
let inputNumber;
let id = inputNumber;
let btn = document.getElementById("btn_find");
let info = document.getElementById("info");
let error = document.getElementById("err");
const urls = {
  peoples: `https://swapi.dev/api/people/`,
  planets: `https://swapi.dev/api/planets/`,
  films: `https://swapi.dev/api/films/`,
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  clearFields();
  search();
});

async function findData(url, errMessage) {
  const response = await fetch(url);
  const data = await response.json();
  try {
    if (response.ok && data) {
      info.textContent = `Name: ${data.name}`;
    } else {
      error.textContent = `Ошибка ${response.status}: введите число меньше указанного`;
    }
  } catch (err) {
    error.textContent = `Ошибка: ${errMessage}`;
    throw err;
  }
  console.log(data);
}

// функция вывода инфо на экран
function search() {
  let selectValue = document.getElementById("select_id").value;
  inputNumber = document.getElementById("number").value;
  if (!selectValue) {
    error.textContent = "Выберите вариант из списка";
  } else if (urls[selectValue]) {
    findData(
      `${urls[selectValue]}${inputNumber}/`,
      `${selectValue.charAt(0).toUpperCase() + selectValue.slice(1)} name: `
    );
  } else {
    error.textContent = "Некорректный выбор";
  }
}

function clearFields() {
  info.textContent = "";
  error.textContent = "";
  console.clear();
}

let loader = document.querySelector(".loader_wrapper");

btn.addEventListener("click", () => {
    loader.classList.add("active");
  setTimeout(() => {
    loader.classList.remove("active");
    loader.classList.add("hide");
  }, 600);
});
