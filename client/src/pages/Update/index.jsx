import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
 

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
    //   await axios.put(`http://localhost:8000/books/${id}`, book);
      await axios.put(`https://merciful.wuaze.com/books/${id}`, book);

        navigate("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update a new book</h1>
      <input
        type="text"
        placeholder="title"
        name="title"
        value={book?.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        value={book?.desc}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="cover"
        name="cover"
        value={book?.cover}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update book</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
};

export default Update;
