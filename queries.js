// Write MongoDB queries to:
//   - Find all books in a specific genre
//   - Find books published after a certain year
//   - Find books by a specific author
//   - Update the price of a specific book
//   - Delete a book by its title
//  *    db.books.find({ author: 'George Orwell' })
// use books  // Mongo shell command; commented out because it's not valid JavaScript
// switched to db books

// Task 2 Basic CRUD operartions: 
// a. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });
/* Sample output (commented out so this file is valid JavaScript):
{
  _id: ObjectId('68f82111bfb902e2c7e8dd5d'),
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Fiction',
  published_year: 1960,
  price: 12.99,
  in_stock: true,
  pages: 336,
  publisher: 'J. B. Lippincott & Co.'
}
{
  _id: ObjectId('68f82921bfb902e2c7e8dd60'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}
{
  _id: ObjectId('68f82921bfb902e2c7e8dd63'),
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  genre: 'Fiction',
  published_year: 1951,
  price: 8.99,
  in_stock: true,
  pages: 224,
  publisher: 'Little, Brown and Company'
}
{
  _id: ObjectId('68f82921bfb902e2c7e8dd67'),
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  genre: 'Fiction',
  published_year: 1988,
  price: 10.99,
  in_stock: true,
  pages: 197,
  publisher: 'HarperOne'
}
*/
// Task 2: b. Find books published after a certain year (e.g., 2000)
db.books.find({ published_year: { $lte: 1945 } });
/* Sample output (commented out so this file is valid JavaScript):
{
  _id: ObjectId('68f82921bfb902e2c7e8dd60'),
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  genre: 'Fiction',
  published_year: 1925,
  price: 9.99,
  in_stock: true,
  pages: 180,
  publisher: "Charles Scribner's Sons"
}   
{
  _id: ObjectId('68f82921bfb902e2c7e8dd61'),
  title: 'Brave New World',
  author: 'Aldous Huxley',
  genre: 'Dystopian',
  published_year: 1932,
  price: 11.5,
  in_stock: false,
  pages: 311,
  publisher: 'Chatto & Windus'
}   
{
  _id: ObjectId('68f82921bfb902e2c7e8dd62'),
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  genre: 'Fantasy',
  published_year: 1937,
  price: 14.99,
  in_stock: true,
  pages: 310,
  publisher: 'George Allen & Unwin'
}   
{
  _id: ObjectId('68f82921bfb902e2c7e8dd64'),
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  genre: 'Romance',
  published_year: 1813,
  price: 7.99,
  in_stock: true,
  pages: 432,
  publisher: 'T. Egerton, Whitehall'
}   
{
  _id: ObjectId('68f82921bfb902e2c7e8dd66'),
  title: 'Animal Farm',
  author: 'George Orwell',
  genre: 'Political Satire',
  published_year: 1945,
  price: 8.5,
  in_stock: false,
  pages: 112,
  publisher: 'Secker & Warburg'
}   
*/
// Task 2: c. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });
// Sample output (commented out so this file is valid JavaScript):
/*
{
  _id: ObjectId('68f82921bfb902e2c7e8dd5e'),
  title: '1984',
  author: 'George Orwell',
  genre: 'Dystopian',
  published_year: 1949,
  price: 10.99,
  in_stock: true,
  pages: 328,
  publisher: 'Secker & Warburg'
}
{
  _id: ObjectId('68f82921bfb902e2c7e8dd66'),
  title: 'Animal Farm',
  author: 'George Orwell',
  genre: 'Political Satire',
  published_year: 1945,
  price: 8.5,
  in_stock: false,
  pages: 112,
  publisher: 'Secker & Warburg'
}
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
)

// Sample result (commented out):
/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
db.books.updateMany(
  { author: "George Orwell" },
  { $set: { price: 12.99 } }
);
// Sample result (commented out):
/*
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
db.books.deleteOne({ title: "The Catcher in the Rye" });
// Sample result (commented out):
/*
{
  acknowledged: true,
  deletedCount: 1
}
*/

// Task 2: e. Delete a book by its title (e.g., "Brave New World")
db.books.deleteOne({ title: "The Catcher in the Rye" });
// Sample result (commented out):
/*
{
  acknowledged: true,
  deletedCount: 1
}
*/

//Task 3 Advanced queries:
// a. Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
// b. Use projection to return only specific fields to show only title, author, and price (and hide _id):
db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 2010 }
  },
  {
    _id: 0,
    title: 1,
    author: 1,
    price: 1
  }
)

// c. Sort books by price Ascending (low → high)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: 1 });

/* Sample output (commented out so this file is valid JavaScript):
{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  price: 7.99
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 10.99
}
{
  title: 'Brave New World',
  author: 'Aldous Huxley',
  price: 11.5
}
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 12.99
}
{
  title: '1984',
  author: 'George Orwell',
  price: 12.99
}
{
  title: 'Animal Farm',
  author: 'George Orwell',
  price: 12.99
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 14.99
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 14.99
}
*/

// d. Sort books by published_year Descending (newest → oldest)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ price: -1 })
;
/* Sample output (commented out so this file is valid JavaScript):
{
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  price: 19.99
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 14.99
}
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 12.99
}
{
  title: '1984',
  author: 'George Orwell',
  price: 12.99
}
{
  title: 'Animal Farm',
  author: 'George Orwell',
  price: 12.99
}
{
  title: 'Brave New World',
  author: 'Aldous Huxley',
  price: 11.5
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 10.99
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
*/

// e. Implement pagination (5 books per page) Pagination uses limit() and skip(). Each “page” shows 5 books; Page 1 (books 1–5)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })
  .sort({ price: 1 })
  .limit(5)
  .skip(0)
;
/* Sample output (commented out so this file is valid JavaScript):
{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  price: 7.99
}
{
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  price: 9.99
}
{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  price: 10.99
}
{
  title: 'Brave New World',
  author: 'Aldous Huxley',
  price: 11.5
}
{
  title: '1984',
  author: 'George Orwell',
  price: 12.99
}
*/
//f. Page 2 (books 6–10)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 })
  .sort({ price: 1 })
  .limit(5)
  .skip(5)
;
/* Sample output (commented out so this file is valid JavaScript):
{
  title: 'Animal Farm',
  author: 'George Orwell',
  price: 12.99
}
{
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  price: 12.99
}
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  price: 14.99
}
{
  title: 'The Lord of the Rings',
  author: 'J.R.R. Tolkien',
  price: 19.99
}
*/
// Task 4: Aggregation Pipeline
// a. Calculate the average price of books in each genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",                 // group by genre
      average_price: { $avg: "$price" },  // calculate average price
      total_books: { $sum: 1 }       // count how many books per genre (optional)
    }
  },
  {
    $sort: { average_price: -1 }     // sort by highest average price first
  }
]);
/* Sample output (commented out so this file is valid JavaScript):
{
  _id: 'Fantasy',
  average_price: 17.49,
  total_books: 2
}
{
  _id: 'Political Satire',
  average_price: 12.99,
  total_books: 1
}
{
  _id: 'Dystopian',
  average_price: 12.245000000000001,
  total_books: 2
}
{
  _id: 'Fiction',
  average_price: 11.74,
  total_books: 4
}
{
  _id: 'Fiction',
  average_price: 11.74,
  total_books: 4
}
*/
// b. Find the author with the most books
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { book_count: -1 }
  },
  {
    $limit: 1
  }
]);
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      book_count: { $sum: 1 }
    }
  },
  {
    $sort: { book_count: -1 }
  },
  {
    $limit: 1
  }
]);
/* Sample output (commented out so this file is valid JavaScript):
{
    _id: 'George Orwell',
    book_count: 2
}
*/
//c. Group books by publication decade and count them
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      total_books: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }  // sort decades ascending
  }
]);
//Sample output (commented out so this file is valid JavaScript)
/*
{
  _id: '1810s',
  total_books: 1
}
{
  _id: '1920s',
  total_books: 1
}
{
  _id: '1930s',
  total_books: 2
}
{
  _id: '1940s',
  total_books: 2
}
{
  _id: '1950s',
  total_books: 1
}
{
  _id: '1960s',
  total_books: 2
}
{
  _id: '1980s',
  total_books: 1
}
*/
// Task 5: Indexing
// a. Create an index on the title field
db.books.createIndex({ title: 1 })
;
title_1
db.books.getIndexes()
;
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { title: 1 }, name: 'title_1' }
]
// b. Create a compound index on author and published_year


