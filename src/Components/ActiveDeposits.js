const ActiveDeposits = () => {
  return (
    <div className="details_main">
      <div className="main_details">
        <h2>ActiveDeposits</h2>
        <span className="number">2</span>
        <button>➕</button>
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
            <p>771 Lost Round</p>
          </td>
          <td>23 february 2022</td>
          <td>$3000</td>
          <td>$8000</td>
          <td>
            Awwaiting Bank Processing <span class="dot yellow"></span>
          </td>
        </tr>
        <tr>
          <td className="sai">
            <img
              src="https://s.ndtvimg.com/images/content/2014/aug/806/lukas-rosol-us-open-series.jpg"
              alt="no_image"
            ></img>
            <p>1491 Jaggad Actor</p>
          </td>
          <td>12 March 2020</td>
          <td>$2000</td>
          <td>$4000</td>
          <td>
            Paymnet Processed<span class="dot green"></span>
          </td>
        </tr>
      </table>

      <button>All Active Deposits</button>
    </div>
  );
};
export default ActiveDeposits;
