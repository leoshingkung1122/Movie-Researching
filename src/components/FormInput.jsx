
function FormInput({name, setName, email, setEmail , errors}) {
    
    return (
        <div className="space-y-6">
            {/* Name Input */}
            <div className="group">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                    Name
                </label>
                <div className="relative">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm
                                 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                                 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md
                                 placeholder-gray-400"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
                {errors.name && (
                    <p className="mt-2 text-red-500 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email Input */}
            <div className="group">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                    Email
                </label>
                <div className="relative">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm
                                 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 
                                 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md
                                 placeholder-gray-400"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                </div>
                {errors.email && (
                    <p className="mt-2 text-red-500 text-sm flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                    </p>
                )}
            </div>
        </div>
    )
}

export default FormInput;