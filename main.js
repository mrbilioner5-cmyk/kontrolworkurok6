{
  const name = "Алекс";
  let age = 16;
  const isStudent = true;
  const hobbies = ["Футбол", "Музыка", "Программирование"];

  console.log("Имя:", name);
  console.log("Возраст:", age);
  console.log("Студент:", isStudent);
  console.log("Хобби:", hobbies);
}


{
  const num1 = 50;
  const num2 = 10;

  console.log("Сумма:", num1 + num2);
  console.log("Разность:", num1 - num2);
  console.log("Произведение:", num1 * num2);
  console.log("Частное:", num1 / num2);
}


{
  const name = "John";
  const age = 20;

  console.log(name + " is " + age + " years old");
}


{
  const age = 17;

  if (age < 13) {
    console.log("Ребенок");
  } else if (age <= 17) {
    console.log("Подросток");
  } else if (age <= 65) {
    console.log("Взрослый");
  } else {
    console.log("Пенсионер");
  }
}

const checkEvenOdd = (number) => {
  if (number % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
};

checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(12);

{
  const age = 16;
  const height = 170;

  if (age < 5) {
    console.log("Слишком мал");
  } else if (age <= 12) {
    console.log("Добро пожаловать");
  } else if (age <= 18 && height > 160) {
    console.log("Добро пожаловать");
  } else {
    console.log("Не разрешено");
  }
}


for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 3.2 Сумма чисел
const sumNumbers = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumNumbers(5));
console.log(sumNumbers(10));


{
  let number = 20;

  while (number >= 1) {
    console.log(number);
    number--;
  }
}


{
  const grades = [5, 4, 3, 5, 2, 4, 5];

  let sum = 0;
  let max = grades[0];

  for (let i = 0; i < grades.length; i++) {
    console.log("Оценка:", grades[i]);

    sum += grades[i];

    if (grades[i] > max) {
      max = grades[i];
    }
  }

  const average = sum / grades.length;

  console.log("Сумма:", sum);
  console.log("Средняя оценка:", average);
  console.log("Максимальная оценка:", max);
}

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
  }
}

{
  const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

  const findCity = (arr, city) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === city) {
        return i;
      }
    }

    return -1;
  };

  console.log(findCity(cities, "Ош"));
  console.log(findCity(cities, "Каракол"));
  console.log(findCity(cities, "Нарын"));
}


{
  const student = {
    name: "Даниэл",
    age: 18,
    courses: ["HTML", "CSS", "JavaScript"],
    isActive: true
  };

  console.log("Студент:", student);

  student.age++;

  console.log("Новый возраст:", student.age);

  for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
  }
}

{
  const product = {
    name: "Ноутбук",
    price: 50000,
    quantity: 2
  };

  const getTotalCost = (product) => {
    const total = product.price * product.quantity;
    console.log("Общая стоимость:", total);
  };

  getTotalCost(product);
}

{
  const books = [
    {
      title: "Книга 1",
      author: "Автор 1",
      year: 2005
    },
    {
      title: "Книга 2",
      author: "Автор 2",
      year: 1995
    },
    {
      title: "Книга 3",
      author: "Автор 3",
      year: 2020
    }
  ];

  let oldestBook = books[0];

  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);

    if (books[i].year < oldestBook.year) {
      oldestBook = books[i];
    }
  }

  console.log("Самая старая книга:", oldestBook);
}

const calculateDiscount = (price, discount) => {
  return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2000, 20));
console.log(calculateDiscount(500, 50));


const getGrade = (score) => {
  if (score < 0 || score > 100) {
    return "Некорректный балл";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 40) {
    return "C";
  } else {
    return "F";
  }
};

console.log(getGrade(90));
console.log(getGrade(75));
console.log(getGrade(50));
console.log(getGrade(20));

const getMaxNumber = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(getMaxNumber([3, 7, 2, 9, 5]));
console.log(getMaxNumber([10, 20, 50, 30]));
console.log(getMaxNumber([-5, -2, -8]));


const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

const addTask = () => {
  const value = taskInput.value.trim();

  if (value === "") {
    return;
  }

  const element = document.createElement("li");

  element.innerText = value;

  element.classList.add("task-item");

  taskList.append(element);

  taskInput.value = "";
};

addBtn.addEventListener("click", addTask);



const themeBtn = document.querySelector("#themeBtn");
const mainContent = document.querySelector("#mainContent");

themeBtn.addEventListener("click", () => {
  mainContent.classList.toggle("dark-theme");

  if (mainContent.classList.contains("dark-theme")) {
    themeBtn.innerText = "Светлая тема";
  } else {
    themeBtn.innerText = "Темная тема";
  }
});

