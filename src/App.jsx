import { useState } from "react";

import UserInputGroup from "./components/UserInputGroup";
import InvestmentResult from "./components/InvestmentResult";

import './util/investment';

function App() {

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

  return (<>
    <UserInputGroup userInput={userInput} handleInputChange={handleInputChange}/>
    <InvestmentResult />
  </>);
}

export default App