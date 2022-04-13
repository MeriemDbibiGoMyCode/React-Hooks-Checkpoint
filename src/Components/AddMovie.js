import React, { useState } from "react";

const AddMovie = ({ handleAdd }) => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");
  const AddMovie = () => {
    handleAdd({
      isDone: false,
      id: Math.random(),
      name: input,
      image: image,
      rating: rating,
      date: date
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="put movie's name"
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="put movie's image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="put movie's rating"
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="text"
        placeholder="put movie's date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={() => AddMovie()}>add</button>
    </div>
  );
};

export default AddMovie;
