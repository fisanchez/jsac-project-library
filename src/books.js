import faker from "faker";

var tempBookList = [];
var genres = ["Horror", "Fantasy", "Autobiography", "Non-fiction", "Fiction"];

for (var i = 0; i < 20; i++) {
  tempBookList.push({
    title: faker.random.words(),
    author: faker.name.findName(),
    pages: Math.floor(Math.random() * 1000),
    genre: genres[Math.floor(Math.random() * 5)],
  });
}

export var bookList = tempBookList;
