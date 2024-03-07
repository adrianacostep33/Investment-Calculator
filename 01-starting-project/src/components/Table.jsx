import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ investmentDetails }) => {
  const results = calculateInvestmentResults(investmentDetails);

  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col" className="center">
            Year
          </th>
          <th scope="col" className="center">
            Investment Value
          </th>
          <th scope="col" className="center">
            Interest(Year)
          </th>
          <th scope="col" className="center">
            Total Interest
          </th>
          <th scope="col" className="center">
            Invested Capital
          </th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              (result.year * result.annualInvestment +
                investmentDetails.initialInvestment);
            const investedCapital = result.valueEndOfYear - totalInterest;
            return (
              <tr key={result.year}>
                <td className="center">{result.year}</td>
                <td className="center">
                  {formatter.format(result.valueEndOfYear)}
                </td>
                <td className="center">{formatter.format(result.interest)}</td>
                <td className="center">{formatter.format(totalInterest)}</td>
                <td className="center">{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
