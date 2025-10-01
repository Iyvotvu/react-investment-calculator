import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 1,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleInputChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            };
        });
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onChange={handleInputChange}/>
            {!inputIsValid && <p className="center">Please enter a valid duration</p>}
            {inputIsValid && <Results userInput={userInput}/>}
        </>
    )
}

export default App
