import movies from "../constants/MovieArray.mjs";

function movieList({selectedOption, setSelectedOption , errors}) {


    return (
      <div className="flex flex-col space-y-4  mt-5 border-2 border-gray-300 rounded-md p-5">
        <h3 className="text-2xl font-bold">Select a movie</h3>

      {movies.map((movie) => (
        <label
          key={movie.title}
          className={`border rounded-lg p-4 cursor-pointer transition duration-200 ease-out transform
            ${selectedOption === movie.title 
              ? "border-4 border-blue-500 ring-4 ring-blue-200 shadow-lg scale-105" 
              : "border border-gray-300 hover:border-blue-300 hover:shadow-md"
            }
          `}
        >
          <input
            type="radio"
            name="option"
            value={movie.title}
            checked={selectedOption === movie.title}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="hidden"
          />
          <p className="text-xl">{movie.title} ({movie.year}) - {movie.director}</p>
        </label>
      ))}
      {errors.selectedOption && <p className="text-red-500">{errors.selectedOption}</p>}
    </div>
  );
  }
  
  export default movieList;