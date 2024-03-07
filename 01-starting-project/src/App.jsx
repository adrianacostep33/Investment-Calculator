import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Table from "./components/Table";

export const INVESTMENTS_DETAILS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 1,
};

function App() {
  const [investmentDetails, setInvestmentDetails] =
    useState(INVESTMENTS_DETAILS);

  const handleInvestmentDetailsChange = (investmentDetailField, newValue) => {
    setInvestmentDetails((prevInvestment) => {
      return {
        ...prevInvestment,
        [investmentDetailField]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />

      <InvestmentForm
        handleInvestmentDetailsChange={handleInvestmentDetailsChange}
      />

      {investmentDetails.duration < 1 && (
        <p className="center">
          Investment duration must be higher than one year
        </p>
      )}
      {investmentDetails.duration >= 1 && (
        <Table investmentDetails={investmentDetails} />
      )}
    </>
  );
}

export default App;
