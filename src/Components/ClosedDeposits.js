const ClosedDeposits = () => {
  return (
    <div className="details_main deposit_details">
      <div className="main_details">
        <h2>ClosedDeposits</h2>
        <span className="number">8</span>
      </div>
      <table>
        <tr>
          <th>property</th>
          <th>Move In Date</th>
          <th>Rent</th>
          <th>Deposit</th>
          <th>Status</th>
        </tr>
        <tr>
          <td className="sai">
            <img
              src="https://img.rasset.ie/00195ce3-500.jpg"
              alt="no_image"
            ></img>
            <p>1694 Noble Cape</p>
          </td>
          <td>3 february 2020</td>
          <td>$3000</td>
          <td>$8000</td>
          <td>
            Awaiting Bank Processing <span class="dot green"></span>
          </td>
        </tr>
        <tr>
          <td className="sai">
            <img
              src="https://s.ndtvimg.com/images/content/2014/aug/806/lukas-rosol-us-open-series.jpg"
              alt="no_image"
            ></img>
            <p>1141 Twamy Maze</p>
          </td>
          <td>12 january 2020</td>
          <td>$2500</td>
          <td>$7500</td>
          <td>
            Expired no payment Received <span class="dot red"></span>
          </td>
        </tr>
      </table>

      <button>All Active Deposits</button>
    </div>
  );
};
export default ClosedDeposits;
