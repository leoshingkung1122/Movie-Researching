
function FormInput({name, setName, email, setEmail}) {
    

    return (
        <div className="flex flex-col gap-2 mt-10 border-2 border-gray-300 rounded-md p-5 w-full">

            <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-5 items-start text-2xl">
                <label htmlFor="name" className="font-bold">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" 
                className = "border-3 border-gray-300 rounded-md p-2 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 w-full"
                value = {name} onChange = {(e) => setName(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-5 items-start text-2xl">
                <label htmlFor="email" className="font-bold">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" 
                className = "border-3 border-gray-300 rounded-md p-2 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-200 w-full" 
                value = {email} onChange = {(e) => setEmail(e.target.value)} />
            </div>

        </div>
    )
}


export default FormInput;