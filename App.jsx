import React, { useState } from "react";

function App() {
  // Initial books list
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Filtered books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add a new book
  const addBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([
        ...books,
        { id: Date.now(), title: newTitle, author: newAuthor },
      ]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove a book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px", margin: "10px" }}>
      <h1>Library Management</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", display: "block", width: "100%" }}
      />

      {/* Add book form */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={{ marginRight: "5px" }}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Books list */}
      {filteredBooks.map((book) => (
        <div
          key={book.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "5px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            <strong>{book.title}</strong> by {book.author}
          </span>
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default App;
