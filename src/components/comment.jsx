

function Comment({text, setText}) {

    const maxLength = 200;

    return (
        <div className="space-y-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Comment (optional)</h3>
                <p className="text-gray-600">Share your thoughts about the selected movie</p>
            </div>

            <div className="group relative">
                <textarea 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    maxLength={maxLength}
                    className="w-full min-h-32 max-h-56 p-4 rounded-2xl border-2 border-gray-200 
                             bg-white/50 backdrop-blur-sm overflow-y-auto resize-none
                             text-lg placeholder-gray-400
                             hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                             focus:outline-none transition-all duration-300 
                             shadow-sm hover:shadow-md focus:shadow-lg" 
                    placeholder="Enter your comment" 
                />
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                
                {/* Character counter */}
                <div className="absolute bottom-3 right-3">
                    <span className={`text-sm px-2 py-1 rounded-full ${
                        text.length > maxLength * 0.8 
                            ? text.length >= maxLength 
                                ? 'bg-red-100 text-red-600' 
                                : 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-600'
                    } transition-colors duration-200`}>
                        {text.length}/{maxLength}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Comment;