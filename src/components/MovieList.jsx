

function movieList({selectedOption, setSelectedOption}) {

    
    const movies = [
        { title: "Avatar", year: "2009", director: "James Cameron" },
        { title: "Inception", year: "2010", director: "Christopher Nolan" },
        { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
        { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
        { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
        { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
      ];
  
  
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
    </div>
  );
  }
  
  export default movieList;