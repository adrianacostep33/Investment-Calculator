import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Table from "./components/Table";

export const INVESTMENTS_DETAILS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

const DUMMY_RESULTS = [
  {
    year: 2020,
    investmentValue: 10000,
    interest: 500,
    total: 10500,
    capital: 9500,
  },
  {
    year: 2021,
    investmentValue: 10500,
    interest: 525,
    total: 11025,
    capital: 10000,
  },
  {
    year: 2022,
    investmentValue: 11025,
    interest: 551.25,
    total: 11576.25,
    capital: 10525,
  },
];

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
      <Table results={DUMMY_RESULTS} />
    </>
  );
}

export default App;
