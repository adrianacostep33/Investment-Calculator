const Table = ({ results }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest(Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((result) => {
            return (
              <tr key={result.year}>
                <td>{result.year}</td>
                <td>{result.investmentValue}</td>
                <td>{result.interest}</td>
                <td>{result.total}</td>
                <td>{result.capital}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
