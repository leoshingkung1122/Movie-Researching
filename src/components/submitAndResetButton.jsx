function SubmitAndResetButton({ resetForm }) {

    return (
      <div className="flex flex-row gap-4 mt-5 w-full border-2 border-gray-300 rounded-md p-2 justify-center py-5 h-[100px] ">
        
        {/* Submit Button */}
        <button
          className="flex-1 px-6 py-2 rounded-md 
                     bg-gradient-to-r from-blue-500 to-blue-600 
                     text-white font-medium shadow-md
                     hover:from-blue-600 hover:to-blue-700
                     hover:shadow-lg hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-blue-300 
                     active:scale-95
                     transition-all duration-300 ease-in-out 
                     "
        type="submit"
        >
          Submit
        </button>
  
        {/* Reset Button */}
        <button
          className="flex-1 px-6 py-2 rounded-md 
                     bg-white border border-gray-400
                     text-gray-700 font-medium shadow-sm
                     hover:bg-gray-100 hover:shadow-md hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-gray-300
                     active:scale-95
                     transition-all duration-300 ease-in-out 
                     "
        type="reset" onClick={resetForm}
        >
          Reset
        </button>
      </div>
    );
  }
  
  export default SubmitAndResetButton;
  