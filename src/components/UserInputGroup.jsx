

import UserInput from "./UserInput";

// eslint-disable-next-line react/prop-types
export default function UserInputGroup({userInput, handleInputChange}){

    

    

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