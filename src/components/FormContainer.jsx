function FormContainer({ children }) {
  return (
    <div className="bg-gradient-to-br from-blue-100/95 via-indigo-100/90 to-purple-100/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border-2 border-blue-200/50 relative overflow-hidden">
      {/* Enhanced Form background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-indigo-200/30 to-purple-200/40"></div>
      
      {/* Multiple gradient circles for depth */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-300/40 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-r from-cyan-300/35 to-transparent rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-bl from-pink-300/35 to-transparent rounded-full blur-lg"></div>
      
      {/* Subtle geometric patterns */}
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-blue-400/40 rounded-lg rotate-12"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-purple-400/40 rounded-lg -rotate-12"></div>
      
      {/* Animated shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default FormContainer;
