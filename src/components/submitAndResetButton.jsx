function SubmitAndResetButton({ resetForm }) {

    return (
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        
        {/* Submit Button */}
        <button
          className="flex-1 px-8 py-4 rounded-2xl 
                     bg-gradient-to-r from-blue-500 to-indigo-600 
                     text-white font-semibold text-lg shadow-lg
                     hover:from-blue-600 hover:to-indigo-700
                     hover:shadow-xl hover:scale-[1.02]
                     focus:outline-none focus:ring-4 focus:ring-blue-300/50
                     active:scale-98
                     transition-all duration-300 ease-out
                     transform"
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
                     bg-white/80 backdrop-blur-sm border-2 border-gray-200
                     text-gray-700 font-semibold text-lg shadow-lg
                     hover:bg-white hover:border-gray-300 hover:shadow-xl hover:scale-[1.02]
                     focus:outline-none focus:ring-4 focus:ring-gray-300/50
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
  