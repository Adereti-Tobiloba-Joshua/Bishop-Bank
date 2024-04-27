import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div>
      <header className="aboutheader">
        <div className="responsive-navbar">
          <Link to={"/about"}>About us</Link>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>login</Link>
        </div>
        <div className="navbar">
          <div className="nav-content">
            <Link to={"/"}>
              <h2>
                BISHOP<span>bank</span>
              </h2>
            </Link>
            <div className="nav-links">
              <Link to={"/about"}>About us</Link>
              <Link to={"/signup"}>Signup</Link>
              <Link to={"/login"}>login</Link>
            </div>
            <button onClick={ToggleEvent} className="menu">
              MENU
            </button>
          </div>
        </div>
        <div className="about-content">
          <h1>We promise to help you save ethically & do some good</h1>
          <h3>
            We're entirely owned by charitable foundations, trusts and social
            purpose organisations. So when we say we’re an ethical bank, we mean
            it.
          </h3>
        </div>
      </header>
      <section className="ourstory">
        <div className="story">
          <h1>OUR STORY</h1>
        </div>
        <div className="people">
          <h1>OUR PEOPLE</h1>
        </div>
      </section>
      <section className="mission">
        <div className="mission-text">
          <h3>The mission</h3>
          <p>
            Bishop Bank was always going to be different. What drives us isn’t
            profits, but a shared idea about the world we want to live in. We
            were founded to support <span>charities with loans</span> that they
            couldn’t find elsewhere and to show people how their{" "}
            <span> savings</span> could be invested ethically and in ways that
            would make them happy.
          </p>
          <p>
            Today, charities have never been more needed, but also more
            challenged. That’s why our promise – of supporting charitable
            activities and helping people to save and do good – is more
            important than ever.
          </p>
          <p>
            We take the time to understand the organisations we lend to, we put
            peoples' money where their values are and together we work to create
            lasting social change in our communities.
          </p>
          <p>
            We are an ethical bank for everyone who knows that banks can do
            better. We are the bank for people who believe that banking should
            always work for good.
          </p>
          <p>
            Find out more in our <span>2023 Impact Report.</span>.
          </p>
        </div>
        <div className="mission-img"></div>
      </section>
      <section className="where-you-fit">
        <h1>Where you fit into ethical banking</h1>
        <div className="fit-container">
          <div className="for-each">
            <img
              alt="Savers"
              loading="lazy"
              src="https://ca1-chr.edcdn.com/images/savers.svg"
            />
            <h3>SAVERS</h3>
            <p>
              You’re looking for an ethical bank that will help you to put your
              money where your values are. You believe that banks can do better
              and you want your money to be a powerful force for good. You open
              an individual or business{" "}
              <span>savings account with Bishop Bank</span>.
            </p>
          </div>
          <div className="for-each">
            <img
              alt="Borrowers"
              loading="lazy"
              src="https://ca1-chr.edcdn.com/images/borrowers.svg"
            />
            <h3>BORROWERS</h3>
            <p>
              You’re a charity or social enterprise and you want to borrow from
              an ethical bank wholeheartedly committed to what you do. You’d
              like to work with a regional manager that you can rely on as a
              partner in doing good. You apply for a{" "}
              <span>Bishop Bank loan</span>.
            </p>
          </div>
          <div className="for-each">
            <img
              alt="Staff"
              loading="lazy"
              src="https://ca1-chr.edcdn.com/images/shareholders.svg"
            />
            <h3>STAFF</h3>
            <p>
              You’re passionate about using finance to support charities and
              social enterprises. You believe that banks have a vital role to
              play in creating a world we all want to live in; you want to live
              your values at work. You apply for a job with Charity Bank.{" "}
              <span> View vacancies.</span>.
            </p>
          </div>
          <div className="for-each">
            <img
              alt="Shareholders"
              loading="lazy"
              src="https://ca1-chr.edcdn.com/images/staff.svg"
            />
            <h3>SHAREHOLDERS</h3>
            <p>
              You’re a trust, charity or foundation looking to invest in a
              business that puts people and planet before profit. You’d like to
              see a modest return but a central purpose of your investment is to
              see your money do social good. You invest in Bishop Bank.
            </p>
          </div>
        </div>
      </section>
      <section className="result">
        <h3>The result – banking for good</h3>
        <p>
          You join a community of like-minded individuals all working towards
          one goal. Our charitable borrowers, ethical savers, social investors
          and dedicated staff are helping to make sure that charities and social
          enterprises can always be there for the people and communities that
          need them. Banking for good provides the tools for people not just
          dreaming of a better world, but busy building one.
        </p>
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
            E: <a href="https://tobilobaadereti@gmail.com">tobilobaadereti@gmail.com</a>
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
export default About;
