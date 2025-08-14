

function Comment({text, setText}) {

    const maxLength = 200;

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-800 mb-2">Comment (optional)</h3>
                <p className="text-cyan-600 font-medium">Share your thoughts about the selected movie</p>
            </div>

            <div className="group relative">
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    maxLength={maxLength}
                    className="w-full min-h-32 max-h-56 p-4 rounded-2xl border-2 border-cyan-300 
                             bg-gradient-to-br from-cyan-100/90 via-blue-100/90 to-indigo-100/90 backdrop-blur-sm 
                             overflow-y-auto resize-none text-lg placeholder-cyan-500 text-cyan-900 font-medium
                             hover:border-cyan-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 
                             focus:outline-none transition-all duration-300 
                             shadow-md hover:shadow-lg focus:shadow-xl" 
                    placeholder="Enter your comment" 
                />
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none"></div>
                
                {/* Character counter */}
                <div className="absolute bottom-3 right-3">
                    <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                        text.length > maxLength * 0.8 
                            ? text.length >= maxLength 
                                ? 'bg-red-200 text-red-700 border border-red-300' 
                                : 'bg-yellow-200 text-yellow-700 border border-yellow-300'
                            : 'bg-cyan-200 text-cyan-700 border border-cyan-300'
                    } transition-colors duration-200`}>
                        {text.length}/{maxLength}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comment;