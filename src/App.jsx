import './App.css'
import { useState } from "react";
import FormInput from "./components/FormInput";
import MovieList from "./components/MovieList";
import Comment from "./components/comment";
import SubmitAndResetButton from "./components/submitAndResetButton";
import { ValidateForm } from "./utils/ValidationFunction.mjs";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ValidateForm(name, email, selectedOption, setErrors) !== 0) {
      return;
    };

    let newFormData = {
      Name: name, 
      Email: email,
      SelectedMovie: selectedOption,
      Comment: text
    };

    alert(JSON.stringify(newFormData));

    setName("");
    setEmail("");
    setSelectedOption("");
    setText("");
    setErrors({});
  }

  
  return (
    <>
      <form className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-5" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold">Information</h1>
        <FormInput name={name} setName={setName} email={email} setEmail={setEmail} errors={errors}/>

        <MovieList selectedOption={selectedOption} setSelectedOption={setSelectedOption} errors={errors}/>
        <Comment text={text} setText={setText} />
        <SubmitAndResetButton setName={setName} setEmail={setEmail} setSelectedOption={setSelectedOption} setText={setText} setErrors={setErrors}/>
      </form>
    </>
  )
}

export default App
