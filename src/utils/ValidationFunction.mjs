



function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ValidateForm(name, email, selectedOption, setErrors) {

    let newErrors = {};
    if (!name) {
        newErrors.name = "Name is required";
    }
    if (!email) {
        newErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
        newErrors.email = "Invalid email address";
    }
    if (!selectedOption) {
        newErrors.selectedOption = "Please select the movie";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length;
}


