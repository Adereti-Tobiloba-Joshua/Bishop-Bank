import { Link } from "react-router-dom";
import "./homepage.css";

function Homepage() {
  return (
    <div>
      <header className="header">
        <div className="responsive-navbar">
          <Link to={"/about"}>About us</Link>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
        <div className="navbar">
          <div className="nav-content">
            <h2>
              BISHOP<span>bank</span>
            </h2>
            <div className="nav-links">
              <Link to={"/about"}>About us</Link>
              <Link to={"/signup"}>Signup</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
            </div>
            <button onClick={ToggleEvent} className="menu">
              MENU
            </button>
          </div>
        </div>
        <div className="home-content">
          <h1>A bank for good</h1>
          <h3>
            Join an ethical bank that uses its savers' money to lend to
            charities and social enterprises.
          </h3>
        </div>
        <button className="loan-btn"> OUR LOANS</button>
        <button className="savings-btn">OUR SAVINGS ACCOUNT</button>
      </header>
      <section className="section">
        <h3>KEEPING YOU SAFE:</h3>
        <h4>
          Scam claiming to be Bishop Bank – we do not guarantee payments -{" "}
          <a href="">read scam information</a>
        </h4>
      </section>
      <section className="next">
        <p>Join a bank that shares your values</p>
      </section>
      <section className="loan-sect">
        <div className="loan-img"></div>
        <div className="loan-content">
          <h4>Loans: borrow to support your mission</h4>
          <p>
            You can borrow from a bank that understands your charitable goals as
            well as your finances. We lend to charities, social enterprises and
            organisations tackling social and environmental issues and shape our
            terms and repayment schedules around their needs.
          </p>
          <button>READ MORE ABOUT OUR LOANS</button>
        </div>
      </section>
      <section className="about-us">
        <div className="empty"></div>
        <div className="about-us-content">
          <h4>A bit about us</h4>
          <p>
            Bishop Bank is a savings and loans bank with a mission to use money
            for good. We use the money our savers entrust to us to make loans to
            charities, social enterprises and organisations with charitable
            purposes.
          </p>
          <p>
            Our community of borrowers, savers, shareholders and staff are all
            working towards one goal – helping to create lasting social change
            in our communities.
          </p>
          <button>READ MORE ABOUT US</button>
        </div>
      </section>
      <section className="savings">
        <div className="savings-left">
          <h4>Savings: put your money where your values are</h4>
          <p>
            You can open a savings account that will earn you a return and
            support the extraordinary work of the charities and social
            enterprises that borrow from us.
          </p>
          <p>
            Choose from our personal savings accounts, charity and business
            savings accounts. Join the ethical banking movement.
          </p>
          <button className="saving-left-btn">CHOOSE A SAVINGS ACCOUNT</button>
        </div>
        <div className="savings-right"></div>
      </section>
      <section className="read">
        <h4>Read about the organisations we support</h4>
        <p>
          Read about how our borrowers are using loans to grow, innovate or
          simply support communities and help people in challenging situations
          to live the lives they want.
        </p>
      </section>
      <section className="filter"></section>
      {/* Story-image */}
      <section className="story-image">
        <div className="story-image-container">
          <div className="story-img-left"></div>
          <div className="story-text">
            <h4>Imago: empowering people and communities</h4>
            <p>
              Imago is a social action charity that delivers diverse services to
              support individuals, organisations and communities across Kent,
              Medway, East Sussex and London.
            </p>
            <a href="">READ THE STORY</a>
          </div>
          <div className="story-img-right"></div>
          <div className="story-text-right">
            <h4>
              The House of St Barnabas: supporting homeless people into
              employment
            </h4>
            <p>
              The House of St Barnabas helps people affected by homelessness and
              long-term unemployment to get their lives back on track.
            </p>
            <a href="">READ THE STORY</a>
          </div>
        </div>
        <div className="story-image-container">
          <div className="story-text-down">
            <h4>
              Swindon Therapy Centre: supporting those living with neurological
              conditions
            </h4>
            <p>
              Swindon Therapy Centre offers a range of therapies and support to
              those living with multiple sclerosis and other neurological
              conditions.
            </p>
            <a href="">READ THE STORY</a>
          </div>
          <div className="story-img-down"></div>
          <div className="story-text-down-right">
            <h4>Burnhams Surgery: Ensuring NHS patients get a great service</h4>
            <p>
              Burnhams Surgery has found an innovative way to move premises,
              take on more patients and attract new GPs.
            </p>
            <a href="">READ THE STORY</a>
          </div>
          <div className="story-img-down2"></div>
        </div>
      </section>
      <section className="values">
        <h4>Our Values Recognised</h4>
        <div className="value-logo">
          <div className="logo1"></div>
          <div className="logo2"></div>
          <div className="logo3"></div>
          <div className="logo4"></div>
          <div className="logo5"></div>
        </div>
      </section>
      <section className="loan-savings">
        <button className="ourloan-btn">OUR LOANS</button>
        <button className="oursavings-btn">OUR SAVINGS ACCOUNT</button>
      </section>
      <section className="section">
        <h3>NEWS ALERT:</h3>
        <h4>
          Scam claiming to be Bishop Bank – we do not guarantee payments -{" "}
          <a href="">read scam information</a>
        </h4>
      </section>
      <section className="newsletter">
        <div className="newsletter-text">
          <h4>Sign up to our e-newsletter</h4>
          <p>Reasons to register</p>
          <p>
            Read inspiring case studies, thought provoking blogs and our latest
            news, events and offers.
          </p>
          <p>Your information & our promise</p>
          <p>
            We will always treat your personal details with the utmost care and
            will never sell them. All emails include an unsubscribe link, so you
            may opt-out at any time.
          </p>
          <a href="">View our privacy policy</a>
        </div>
        <div className="newsletter-form">
          <label htmlFor="Firstname">First Name:</label>
          <input type="text" placeholder="Enter your first name" />
          <label htmlFor="Lasttname">Last Name:</label>
          <input type="text" placeholder="Enter your last name" />
          <label htmlFor="Email">Email:</label>
          <input type="text" placeholder="Enter your email address" />
          <button>SIGN UP</button>
        </div>
      </section>
      <section className="contacts">
        <div className="contact">
          <h4>CONTACT</h4>
          <p>
            The Bishop Bank Limited, Fosse House, 182 High Street, Tonbridge,
            TN9 1BE
          </p>
          <h6>
            T: <a href="">+2348051384557</a>
          </h6>
          <h6>
            E:{" "}
            <a href="https://tobilobaadereti@gmail.com">
              tobilobaadereti@gmail.com
            </a>
          </h6>
        </div>
        <div className="info">
          <h4>INFO</h4>
          <div className="info-link">
            <a href="">Current Vacancies</a>
            <a href="">Publications</a>
            <a href="">Privacy Notice</a>
            <a href="">Cookies</a>
            <a href="">Accessibilty</a>
            <a href="">Complaints</a>
            <a href="">Security</a>
            <a href="">Savings Accounts: Document Library</a>
            <a href="">Diversity</a>
          </div>
        </div>
        <div className="company">
          <h4>COMPANY</h4>
          <div className="info-link">
            <a href="">About us</a>
            <a href="">Loans</a>
            <a href="">Savings</a>
            <a href="">Impact</a>
            <a href="">Blog</a>
            <a href="">Support</a>
            <a href="">Follow The Money</a>
          </div>
        </div>
        <div className="socialize">
          <h4>SOCIALIZE</h4>
          <div className="info-link">
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
            <a href="">Youtube</a>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Homepage;
