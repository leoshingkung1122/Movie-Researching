import { useState } from "react";
import { ValidateForm } from "../utils/ValidationFunction.mjs";

export const useFormLogic = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ValidateForm(name, email, selectedOption, setErrors) !== 0) {
      return;
    }

    let newFormData = {
      Name: name,
      Email: email,
      SelectedMovie: selectedOption,
      Comment: text
    };

    setFormData(newFormData);
    setShowSummary(true);
  };

  const handleStartNewSurvey = () => {
    setShowSummary(false);
    setName("");
    setEmail("");
    setSelectedOption("");
    setText("");
    setErrors({});
    setFormData({});
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSelectedOption("");
    setText("");
    setErrors({});
  };

  return {
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
  };
};
