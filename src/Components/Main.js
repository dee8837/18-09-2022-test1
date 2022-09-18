import ActiveDeposits from "./ActiveDeposits";
import ClosedDeposits from "./ClosedDeposits";

const Main = () => {
  return (
    <div className="Main">
      <div className="left">
        <div className="image">
          <img
            src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-09/Alcaraz%20Carlos%203%20169.jpg?itok=euLaSLCS"
            alt="no_image"
          ></img>
          <p>VIRAT KOHLI</p>
        </div>
        <p>
          {" "}
          <span>🏡</span> Home
        </p>
        <p>
          <span>🏬</span>Deposits
        </p>
        <p>
          <span>👨🏻‍🏭</span>others
        </p>
        <p>
          <span>💲</span>Payments
        </p>
        <p>
          <span>⚙</span>Settings
        </p>

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>

      <div className="right">
        <div className="right_corner">
          <h3>✉</h3>
          <img
            src="https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-09/Alcaraz%20Carlos%203%20169.jpg?itok=euLaSLCS"
            alt="no_image"
          ></img>
        </div>
        <ActiveDeposits />
        <ClosedDeposits />
      </div>
    </div>
  );
};
export default Main;
