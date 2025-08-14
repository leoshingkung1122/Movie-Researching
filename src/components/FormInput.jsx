
function FormInput({name, setName, email, setEmail , errors}) {
    
    return (
        <div className="space-y-6">
            {/* Name Input */}
            <div className="group">
                <label htmlFor="name" className="block text-lg font-semibold text-blue-800 mb-3 group-focus-within:text-blue-600 transition-colors duration-200">
                    Name
                </label>
                <div className="relative">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="w-full px-4 py-3 text-lg border-2 border-blue-300 rounded-xl 
                                 bg-gradient-to-r from-blue-100/90 to-indigo-100/90 backdrop-blur-sm
                                 hover:border-blue-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-200 
                                 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg
                                 placeholder-blue-400 text-blue-900 font-medium"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
                {errors.name && (
                    <p className="mt-2 text-red-600 text-sm flex items-center gap-2 font-medium">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email Input */}
            <div className="group">
                <label htmlFor="email" className="block text-lg font-semibold text-purple-800 mb-3 group-focus-within:text-purple-600 transition-colors duration-200">
                    Email
                </label>
                <div className="relative">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="w-full px-4 py-3 text-lg border-2 border-purple-300 rounded-xl 
                                 bg-gradient-to-r from-purple-100/90 to-pink-100/90 backdrop-blur-sm
                                 hover:border-purple-400 focus:border-purple-600 focus:ring-4 focus:ring-purple-200 
                                 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg
                                 placeholder-purple-400 text-purple-900 font-medium"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
                </div>
                {errors.email && (
                    <p className="mt-2 text-red-600 text-sm flex items-center gap-2 font-medium">
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