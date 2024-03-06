import Input from "./Input";
import { INVESTMENTS_DETAILS } from "../App";

const InvestmentForm = ({ handleInvestmentDetailsChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          lable="initial investment"
          name={Object.keys(INVESTMENTS_DETAILS)[0]}
          onDetailsChange={handleInvestmentDetailsChange}
        />
        <Input
          lable="annual investment"
          name={Object.keys(INVESTMENTS_DETAILS)[1]}
          onDetailsChange={handleInvestmentDetailsChange}
        />
      </div>
      <div className="input-group">
        <Input
          lable="expected return"
          name={Object.keys(INVESTMENTS_DETAILS)[2]}
          onDetailsChange={handleInvestmentDetailsChange}
        />

        <Input
          lable="duration"
          name={Object.keys(INVESTMENTS_DETAILS)[3]}
          onDetailsChange={handleInvestmentDetailsChange}
        />
      </div>
    </div>
  );
};

export default InvestmentForm;
