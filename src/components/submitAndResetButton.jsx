function SubmitAndResetButton({ resetForm }) {

    return (
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        
        {/* Submit Button */}
        <button
          className="flex-1 px-8 py-4 rounded-2xl 
                     bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 
                     text-white font-bold text-lg shadow-xl
                     hover:from-blue-700 hover:via-indigo-800 hover:to-purple-800
                     hover:shadow-2xl hover:scale-[1.02]
                     focus:outline-none focus:ring-4 focus:ring-blue-300/70
                     active:scale-98
                     transition-all duration-300 ease-out
                     transform border-2 border-blue-500/30"
          type="submit"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Submit
          </span>
        </button>
  
        {/* Reset Button */}
        <button
          className="flex-1 px-8 py-4 rounded-2xl 
                     bg-gradient-to-r from-gray-100/95 via-blue-100/90 to-indigo-100/95 backdrop-blur-sm 
                     border-2 border-gray-300/80 text-gray-800 font-bold text-lg shadow-xl
                     hover:from-gray-200 hover:via-blue-200 hover:to-indigo-200 hover:border-gray-400 
                     hover:shadow-2xl hover:scale-[1.02]
                     focus:outline-none focus:ring-4 focus:ring-gray-300/70
                     active:scale-98
                     transition-all duration-300 ease-out
                     transform"
          type="reset" 
          onClick={resetForm}
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Reset
          </span>
        </button>
      </div>
    );
  }
  
  export default SubmitAndResetButton;
  