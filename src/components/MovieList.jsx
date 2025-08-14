import { useState } from "react";

function movieList() {
    const [selectedOption, setSelectedOption] = useState("");
  
    const movies = [
      { id: "movie1", title: "Movie 1", img: "https://via.placeholder.com/100" },
      { id: "movie2", title: "Movie 2", img: "https://via.placeholder.com/100" },
    ];
  
  
    return (
      <div className="flex space-x-4">
      {movies.map((movie) => (
        <label
          key={movie.id}
          className={`border rounded-lg p-4 cursor-pointer ${
            selectedOption === movie.id ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="option"
            value={movie.id}
            checked={selectedOption === movie.id}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="hidden"
          />
          <p>{movie.title}</p>
        </label>
      ))}
    </div>
  );
  }
  
  export default movieList;