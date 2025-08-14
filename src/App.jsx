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
    <>
      <form className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-5" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Information</h1>
        <FormInput name={name} setName={setName} email={email} setEmail={setEmail} errors={errors}/>

        <MovieList selectedOption={selectedOption} setSelectedOption={setSelectedOption} errors={errors}/>
        <Comment text={text} setText={setText} />
        <SubmitAndResetButton resetForm={resetForm}/>
      </form>
    </>
  )
}

export default App
