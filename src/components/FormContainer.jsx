function FormContainer({ children }) {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/30 relative overflow-hidden">
      {/* Form background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default FormContainer;
