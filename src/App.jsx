import './App.css'
import FormHeader from "./components/FormHeader";
import FormContainer from "./components/FormContainer";
import FormContent from "./components/FormContent";
import BackgroundElements from "./components/BackgroundElements";
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
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundElements />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-6xl">
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormHeader />
              <FormContent 
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                text={text}
                setText={setText}
                errors={errors}
                resetForm={resetForm}
              />
            </FormContainer>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
