import movies from "../constants/MovieArray.mjs";

function MovieList({selectedOption, setSelectedOption , errors}) {

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Select a movie</h3>
          <p className="text-lg text-gray-600">Choose your favorite movie from the list below</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <label
              key={movie.title}
              className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ease-out transform
                ${selectedOption === movie.title 
                  ? "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl scale-[1.02] ring-4 ring-blue-200/50" 
                  : "bg-white/70 backdrop-blur-sm border border-gray-200 hover:bg-white/90 hover:border-blue-300 hover:shadow-xl hover:scale-[1.01]"
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
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 ${selectedOption === movie.title ? 'hidden' : ''}`}></div>
              
              <div className="relative z-10">
                <p className={`text-xl font-bold mb-2 ${selectedOption === movie.title ? 'text-white' : 'text-gray-800'}`}>
                  {movie.title}
                </p>
                <p className={`text-base ${selectedOption === movie.title ? 'text-blue-100' : 'text-gray-600'}`}>
                  {movie.year} • {movie.director}
                </p>
              </div>
              
              {/* Selection indicator */}
              {selectedOption === movie.title && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </label>
          ))}
        </div>
        
        {errors.selectedOption && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.selectedOption}
            </p>
          </div>
        )}
      </div>
    );
  }
  
  export default MovieList;