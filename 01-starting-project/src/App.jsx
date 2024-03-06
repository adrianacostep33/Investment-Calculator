import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";

export const INVESTMENTS_DETAILS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investmentDetails, setInvestmentDetails] =
    useState(INVESTMENTS_DETAILS);

  const handleInvestmentDetailsChange = (investmentDetailField, newValue) => {
    setInvestmentDetails((prevInvestment) => {
      return {
        ...prevInvestment,
        [investmentDetailField]: newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <InvestmentForm
        handleInvestmentDetailsChange={handleInvestmentDetailsChange}
      />
    </>
  );
}

export default App;
