import './App.css'
import { useState } from "react";
import FormInput from "./components/FormInput";
import MovieList from "./components/MovieList";
import Comment from "./components/comment";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");

  
  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-5">
        <h1 className="text-4xl font-bold">Information</h1>
        <FormInput name={name} setName={setName} email={email} setEmail={setEmail} />
        <MovieList selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <Comment text={text} setText={setText} />
      </div>
    </>
  )
}

export default App
