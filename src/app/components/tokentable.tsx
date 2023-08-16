const TokenTable = () => (
  <div className="sunken-panel w-full">
    <table className="interactive w-full">
      <thead>
        <tr>
          {/* <th>Address</th> */}
          <th>Supply</th>
          <th>Tax</th>
          <th>Max Buy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>0x000000000000000000000000000000000000dead</td> */}
          <td>2.22 Billion $GRIFT</td>
          <td>0</td>
          <td>1%</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TokenTable;
export const runtime = "edge";
