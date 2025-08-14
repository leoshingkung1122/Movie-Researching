import FormInput from "./FormInput";
import MovieList from "./MovieList";
import Comment from "./comment";
import SubmitAndResetButton from "./submitAndResetButton";

function FormContent({ 
  name, setName, 
  email, setEmail, 
  selectedOption, setSelectedOption, 
  text, setText, 
  errors, 
  resetForm 
}) {
  return (
    <div className="space-y-10">
      <FormInput 
        name={name} 
        setName={setName} 
        email={email} 
        setEmail={setEmail} 
        errors={errors}
      />
      <MovieList 
        selectedOption={selectedOption} 
        setSelectedOption={setSelectedOption} 
        errors={errors}
      />
      <Comment 
        text={text} 
        setText={setText} 
      />
      <SubmitAndResetButton 
        resetForm={resetForm}
      />
    </div>
  );
}

export default FormContent;
