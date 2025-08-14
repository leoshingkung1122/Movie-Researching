import './App.css'
import FormInput from "./components/FormInput";
import MovieList from "./components/MovieList";
import Comment from "./components/comment";
import SubmitAndResetButton from "./components/submitAndResetButton";
import SummaryPage from "./components/SummaryPage";
import { useFormLogic } from "./hooks/useFormLogic";

function App() {
  const {
    // State
    name,
    email,
    selectedOption,
    text,
    errors,
    showSummary,
    formData,
    
    // Setters
    setName,
    setEmail,
    setSelectedOption,
    setText,
    setErrors,
    
    // Functions
    handleSubmit,
    handleStartNewSurvey,
    resetForm
  } = useFormLogic();

  if (showSummary) {
    return <SummaryPage formData={formData} onStartNewSurvey={handleStartNewSurvey} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <form 
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20" 
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Information
            </h1>
            <p className="text-lg text-gray-600">Please fill out the form below</p>
          </div>

          {/* Form Content */}
          <div className="space-y-8">
            <FormInput name={name} setName={setName} email={email} setEmail={setEmail} errors={errors}/>
            <MovieList selectedOption={selectedOption} setSelectedOption={setSelectedOption} errors={errors}/>
            <Comment text={text} setText={setText} />
            <SubmitAndResetButton resetForm={resetForm}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
