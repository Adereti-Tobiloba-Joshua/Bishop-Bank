import { Link } from "react-router-dom";
import "./createaccount.css";

function Createaccount() {
  return (
    <div>
      <div className="backgroundwhite"></div>
      <div className="login-content">
        <Link to={"/"}>
          <h2>
            BISHOP<span>bank</span>
          </h2>
        </Link>
        <form className="form" 
        // onSubmit={handleSubmit}
        >
          <h1>Login</h1>
          <div className="form-details">
            <input
              id="email"
              type="email"
              placeholder="Email Address"
            //   onChange={handleChange}
              required
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
            //   onChange={handleChange}
              required
            />
          </div>
          <div className="check">
            <input className="checkbox" type="checkbox" />
            <label htmlFor=""> Remember me</label>
          </div>
          <button type="submit">Login</button>
          <h4>Don't have an account? </h4>
          <Link to={"/signup"}>Signup</Link>
        </form>
      </div>
    </div>
  );
}
export default Createaccount;
