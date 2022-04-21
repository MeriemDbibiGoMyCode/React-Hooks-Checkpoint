import { useState } from "react";
import "./App.css";
import { Data } from "./Data";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import SearchMovie from "./Components/SearchMovie";
import Rating from "./Components/Rating";
import { Routes, Route, Link } from "react-router-dom";
import  Home  from "./Home";
import Navbar from "./NavBar/NavBar"
import DetailsCard from "./Components/DetailsCard";
function App() {
  const [movie, setMovie] = useState(Data);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(1);

  //partie remove :
  const deleteHAndler = (ID) => {
    setMovie(movie.filter((e) => e.id !== ID));
  };

  //done and not done
  const handleDone = (ID) => {
    setMovie(
      movie.map((el) => (el.id === ID ? { ...el, isDone: !el.isDone } : el))
    );
  };

  // /function add element :
  const handleAdd = (newMovie) => {
    setMovie([...movie, newMovie]);
  };

  // Search
  //const handleSearch=(e)=>{}

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/addMovie"  element={ <AddMovie handleAdd={handleAdd} />} />
      <Route path="/movies" element={<MovieList
        movie={movie}
        deleteHAndler={deleteHAndler}
        handleDone={handleDone}
        handleAdd={handleAdd}
        search={search}
        rating={rating}
      />}/>
        <Route path="/movies/:ID" element={<DetailsCard/>} />
      </Routes>
      <Navbar/>
      <SearchMovie setSearch={setSearch} />
      <Rating setRating={setRating} rating={rating} />
      
    </div>
  );
}

export default App;
