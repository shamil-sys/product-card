// 3. Создайте объект на основе ваших данных.

const myDetails = {
  name: "Шамиль", 
  firstname: "Имамутдинов", 
  email: "shomadancer@gmail.com", 
  job: "Оператор", 
  age: 38, 
  country: "Россия", 
  city: "Белогорск", 
  status: "Женат", 
  children: true,
  numberOfChildren: 5,
}

console.log (myDetails);


// 4. Создайте объект, который будет хранить данные об автомобиле
const car = {
  brand: "Renault",
  model: "Traffic" ,
  year: 2004,
  color: "white",
  transmission: "manual",
}

car.owner = myDetails;

console.log(car);


// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.

function addMaxSpeed (car) {
  if ("maxSpeed" in car) {
    return
  }
  car.maxSpeed = 180;
}
addMaxSpeed (car);

console.log(car.maxSpeed);


// 6. Написать функцию, которая выводит значение из объекта

function showObjectKey (car, key) {
  console.log(car[key]);
}

showObjectKey (car, "model");


// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["Хлеб", "Картошка", "Яйца", "Молоко", "Масло"]

console.log(products);


// 8. 8-ой пунк ДЗ

const listOfFilm = [
  {
    title: "Безумный Макс: Дорога ярости",
    year: 2015,
    director: "Джордж Миллер",
    genre: "фантастика",
  },
  {
    title: "Прибытие",
    year: 2016,
    director: "Дени Вильнёв",
    genre: "драма",
  },
  {
    title: "Дюна",
    year: 2021,
    director: "Дени Вильнёв",
    genre: "драма, фантастика",
  },
  {
    title: "Бедные-несчастные",
    year: 2023,
    director: "Йоргос Лантимос",
    genre: "комедия",
  },
]  

listOfFilm.push (
  {
    title: "Дюна: Часть вторая",
    year: 2024,
    director: "Дени Вильнёв",
    genre: "драма, фантастика",
  }
)

console.log(listOfFilm);


// 9. 9-ый пункт ДЗ

const marvelFilm = [
  {
    title: "Мстители: Эра Альтрона",
    year: 2015,
    director: "Джосс Уидон",
    genre: "фантастика",
  },
  {
    title: "Тор: Рагнарёк",
    year: 2017,
    director: "Тайка Вайтити",
    genre: "фентези",
  },
  {
    title: "Доктор Стрэндж в мультивселенной безумия",
    year: 2022,
    director: "Сэм Рэйми",
    genre: "боевик, ужасы",
  },
]  

const allFilm = [...listOfFilm, ...marvelFilm]

console.log(allFilm);


// 10. 10-й пункт ДЗ

function addOldMovie (allFilm) {
 return allFilm.map((oldFilm) => {
    return {
      ...oldFilm,
      oldMovie: oldFilm.year < 2020 ? true  : false,
    }
  })
}

console.log(addOldMovie(allFilm));