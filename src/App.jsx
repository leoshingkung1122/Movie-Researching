import './App.css'
import { useState } from "react";
import FormInput from "./components/FormInput";


function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Information</h1>
        <FormInput name={name} setName={setName} email={email} setEmail={setEmail} />
      </div>
    </>
  )
}

export default App
