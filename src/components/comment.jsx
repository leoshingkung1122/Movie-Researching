

function Comment({text, setText}) {

    const maxLength = 200;


    return (
        <div className = "flex flex-col items-start gap-2 border-2 border-gray-300 rounded-md p-5 mt-5 w-full ">
            <h3 className="text-2xl font-bold">Comment (optional)</h3>

            <textarea value={text} onChange={(e) => setText(e.target.value)} maxLength={maxLength}
            className="w-full min-h-28 max-h-56  
            p-3 rounded-md border-3 border-gray-300
            overflow-y-auto resize-none          
            transition duration-200 ease-out
            focus:outline-none focus:border-blue-500 focus:border-4
            focus:ring-4 focus:ring-blue-200/60
            hover:border-blue-400
            shadow-sm focus:shadow-lg" 
            placeholder="Enter your comment" />

            <p className="text-sm text-gray-500">{text.length}/{maxLength} characters</p>
        </div>
    )
}

export default Comment;