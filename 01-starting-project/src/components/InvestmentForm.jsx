import Input from "./Input";

const InvestmentForm = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input lable="initial investment" />
        <Input lable="annual investment" />
      </div>
      <div className="input-group">
        <Input lable="expected return" />
        <Input lable="duration" />
      </div>
    </div>
  );
};

export default InvestmentForm;
