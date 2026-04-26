import { useState } from "react";

import UserInput from "./UserInput";

// eslint-disable-next-line react/prop-types
export default function UserInputGroup(){

    const[userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    function handleInputChange(inputIdentifier, newValue){
        console.log(inputIdentifier + ' - ' + newValue);
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        });
    }

    return (<div id="user-input">
        <section className="input-group">
            <UserInput 
                id="initialInvestment" 
                inputLabel="Initial Investment" 
                value={userInput.initialInvestment}
                handleInputChange={handleInputChange} />
            <UserInput id="annualInvestment" 
                inputLabel="Annual Investment"
                value={userInput.annualInvestment} 
                handleInputChange={handleInputChange} />
        </section>
        <section className="input-group">
            <UserInput 
                id="expectedReturn" 
                inputLabel="Expected Return" 
                value={userInput.expectedReturn} 
                handleInputChange={handleInputChange} />
            <UserInput 
                id="duration" 
                inputLabel="Duration" 
                value={userInput.duration} 
                handleInputChange={handleInputChange} />
        </section>
    </div>);
}