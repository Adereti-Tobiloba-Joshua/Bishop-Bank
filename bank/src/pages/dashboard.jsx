import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <div>
          <h1>Dashboard</h1>
          <div className="box">
                <Link to={"/transfer"}>Transfer</Link>
                <Link to={"/withdraw"}>Withdraw</Link>
                <Link to={"/createaccount"}>Create Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
