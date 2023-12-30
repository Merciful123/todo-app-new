import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await axios.get("http://localhost:8000/books");
        setBooks(books.data);
        console.log(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
        await axios.delete("http://localhost:8000/books/" + id);
        window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Todos list</h1>
      {books &&
        books.map((book) => (
          <div key={book.id} className="books">
            <div className="book-card">
              <div className="book">{book.title}</div>
              <div className="book">{book.desc}</div>
              <div className="book">{book.cover}</div>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
              <button>
                <Link to={`/update/${book.id}`}>Update</Link>
              </button>
            </div>
          </div>
        ))}
      <button>
        <Link to="/add">Add Book</Link>
      </button>
    </div>
  );
};

export default Books;
