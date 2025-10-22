📚 MongoDB Books Collection Project

This project demonstrates how to work with MongoDB using a sample collection of books.
It includes database creation, CRUD operations, advanced queries, aggregation pipelines, and performance optimization with indexing.

🧩 Project Overview

We use a sample dataset of books with fields such as:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Fiction",
  "published_year": 1925,
  "price": 9.99,
  "in_stock": true,
  "pages": 180,
  "publisher": "Charles Scribner's Sons"
}

⚙️ Setup Instructions

Start MongoDB

mongod


Open Mongo Shell

mongosh


Create Database

use bookStore


Insert Books Data

db.books.insertMany([ /* paste your book list here */ ])

🧮 Task 1: Basic CRUD Operations
➕ Insert Documents
db.books.insertMany([...])

🔍 Find All Books
db.books.find()

✏️ Update a Book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.99 } }
)

❌ Delete a Book
db.books.deleteOne({ title: "Animal Farm" })

🔎 Task 2: Querying Data
📚 Find all books in a specific genre
db.books.find({ genre: "Fiction" })

📅 Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } })

✍️ Find books by a specific author
db.books.find({ author: "George Orwell" })

🎯 Task 3: Advanced Queries
✅ Find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

🔢 Projection (Return specific fields)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
)

📈 Sort Books by Price

Ascending:

db.books.find().sort({ price: 1 })


Descending:

db.books.find().sort({ price: -1 })

📄 Pagination (5 per page)

Page 1:

db.books.find().limit(5)


Page 2:

db.books.find().skip(5).limit(5)

🔄 Task 4: Aggregation Pipelines
💰 Average Price by Genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

✍️ Author with the Most Books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
])

🕰️ Books by Publication Decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: [ "$published_year", 10 ] }, { $mod: [ { $divide: [ "$published_year", 10 ] }, 1 ] } ] },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $concat: [ { $toString: { $multiply: [ "$_id", 10 ] } }, "s" ] },
      count: 1,
      _id: 0
    }
  },
  { $sort: { decade: 1 } }
])

⚡ Task 5: Indexing and Performance Optimization
🔤 Create Index on title
db.books.createIndex({ title: 1 })

🧩 Create Compound Index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

🧠 View Indexes
db.books.getIndexes()

🔍 Analyze Query Performance
db.books.find({ title: "1984" }).explain("executionStats")


Output Example:

Before index → "stage": "COLLSCAN" (Collection Scan)

After index → "stage": "IXSCAN" (Index Scan, much faster)

📊 Summary Table
Task	Feature	Command
1	Create DB & Insert Data	use bookStore, insertMany()
2	Query	find(), updateOne(), deleteOne()
3	Projection & Sorting	.find({}, {fields}), .sort(), .limit()
4	Aggregation	$group, $avg, $sort, $project
5	Indexing	.createIndex(), .explain("executionStats")
🧠 Notes

Indexes drastically improve search performance but take up storage.

Always monitor performance with:

db.books.stats()


Remove unused indexes:

db.books.dropIndex("title_1")

🏁 Conclusion

This project demonstrates:

Core MongoDB operations

Efficient querying with projections, sorting, and pagination

Aggregation pipelines for analytics

Performance optimization using indexes and the explain() method

MongoDB is powerful, flexible, and scalable — perfect for managing structured and semi-structured data like book collections.