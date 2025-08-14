function BackgroundElements() {
  return (
    <>
      {/* Beautiful Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-transparent to-purple-200/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/10 to-purple-100/10"></div>
        </div>
      </div>
    </>
  );
}

export default BackgroundElements;
