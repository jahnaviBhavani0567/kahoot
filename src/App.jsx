import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What is the Kahoot! app?",
      a: "The Kahoot! app is a quiz and trivia game app where you can create, host, play and learn."
    },
    {
      q: "Is Kahoot! free?",
      a: "Yes. Kahoot! is free to download and use, with additional premium features available."
    },
    {
      q: "How do I download the Kahoot! app?",
      a: "You can download the Kahoot! app from the App Store, Google Play or Chrome Store."
    },
    {
      q: "Does Kahoot! work on iPhone and Android?",
      a: "Yes. Kahoot! is available on both iPhone and Android devices."
    },
    {
      q: "How can I use Kahoot as a trivia app?",
      a: "You can play trivia games with friends, family, classmates or other groups."
    },
    {
      q: "How can I use Kahoot as a quiz game app?",
      a: "Create a quiz, share the game PIN and invite others to play."
    },
    {
      q: "How can I use Kahoot as a quiz maker app?",
      a: "You can create your own interactive quizzes and games on different topics."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="app">

      {/* ================= HEADER ================= */}

      <header className="kahoot-header">

        <div className="navbar-logo">
          <img src="/images/logo.png" alt="Kahoot!" />
        </div>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

          <a href="#home">HOME</a>

          <a href="#social">Social Gatherings</a>

          <a href="#kids">Learning for Kids</a>

          <a href="#study">Study</a>

          <a href="#pricing">Plans &amp; Pricing</a>

          <a href="#explore">Explore Content</a>

          <a href="#join">Join</a>

          <a href="#start">Start for FREE</a>

          <a href="#login">Log in</a>

          <span className="language">EN</span>

        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="hero-text">

            <h1>
              Kahoot! app: quiz and trivia game for iPhone and Android
            </h1>

            <p>
              Create quiz games, host trivia nights, and learn something new
              with the Kahoot! app.
            </p>

            <p className="hero-bold">
              Make your lessons, presentations or gatherings more engaging!
            </p>

            <div className="hero-plus">

              <h2>
                Kahoot!+ the best way to learn and play.
              </h2>

              <p>
                Get Kahoot!+ from $3/mo. Save 20%. Offer ends October 12.
              </p>

            </div>

            <div className="hero-buttons">

              <button className="green-button">
                Get started
              </button>

            </div>

          </div>


          {/* QR / APP IMAGE AREA */}

          <div className="hero-qr-area">

            <div className="green-blur"></div>

            <img
              className="hero-main-image"
              src="/images/hero.png.png"
              alt="Kahoot mobile app"
            />

          </div>

        </div>

      </section>


      {/* ================= ONE APP ================= */}

      <section className="intro-section">

        <div className="intro-content">

          <h2>
            One app. Create, host, play, and learn.
          </h2>

          <p>
            Create quizzes, host games, play with others and turn learning
            content into interactive experiences.
          </p>

        </div>

      </section>


      {/* ================= CREATE ================= */}

      <section className="feature-section">

        <div className="feature-content">

          <div className="feature-image">

            <img
              src="/images/join.png"
              alt="Create quiz"
            />

          </div>

          <div className="feature-text">

            <span className="feature-number">
              01
            </span>

            <h2>
              Create: Build a quiz on anything
            </h2>

            <p>
              Make your own quiz, trivia game or study set in minutes.
            </p>

            <button className="outline-button">
              Learn more
            </button>

          </div>

        </div>

      </section>


      {/* ================= HOST ================= */}

      <section className="feature-section">

        <div className="feature-content reverse">

          <div className="feature-text">

            <span className="feature-number">
              02
            </span>

            <h2>
              Host: Run a live game with your group
            </h2>

            <p>
              Share a PIN and let everyone join your game in real time.
            </p>

            <button className="outline-button">
              Learn more
            </button>

          </div>

          <div className="feature-image">

            <img
              src="/images/host.png"
              alt="Host Kahoot game"
            />

          </div>

        </div>

      </section>


      {/* ================= PLAY ================= */}

      <section className="feature-section">

        <div className="feature-content">

          <div className="feature-image">

            <img
              src="/images/play.png.png"
              alt="Play Kahoot"
            />

          </div>

          <div className="feature-text">

            <span className="feature-number">
              03
            </span>

            <h2>
              Play: Join any game instantly
            </h2>

            <p>
              Got a PIN? Join a game from your phone, tablet or browser.
            </p>

            <button className="outline-button">
              Learn more
            </button>

          </div>

        </div>

      </section>


      {/* ================= LEARN ================= */}

      <section className="feature-section">

        <div className="feature-content reverse">

          <div className="feature-text">

            <span className="feature-number">
              04
            </span>

            <h2>
              Learn: Turn any content into a game
            </h2>

            <p>
              Turn your learning material into quizzes and interactive
              activities.
            </p>

            <button className="outline-button">
              Learn more
            </button>

          </div>

          <div className="feature-image">

            <img
              src="/images/learn.png"
              alt="Learn with Kahoot"
            />

          </div>

        </div>

      </section>


      {/* ================= DOWNLOAD ================= */}

      <section className="download-section">

        <div className="download-container">

          <div className="download-image">

            <img
              src="/images/logo.png"
              alt="Kahoot app"
            />

          </div>

          <div className="download-text">

            <h2>
              Download the Kahoot! app for free and play across all your
              devices!
            </h2>

            <p>
              One app, unlimited fun
            </p>

            <div className="store-buttons">

              <button className="store-button">
                <span>Download on the</span>
                <strong>App Store</strong>
              </button>

              <button className="store-button">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </button>

              <button className="store-button">
                <span>Download on the</span>
                <strong>Chrome Store</strong>
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= KIDS ================= */}

      <section
        className="kids-download-section"
        id="kids"
      >

        <div className="kids-container">

          <div className="kids-image">

            <img
              src="/images/kids.png"
              alt="Kahoot Kids"
            />

          </div>

          <div className="kids-text">

            <h2>
              Download the Kids version of the Kahoot! app.
            </h2>

            <h3>
              Kahoot! Kids: Learn and Play
            </h3>

            <div className="store-buttons">

              <button className="store-button">
                <span>Download on the</span>
                <strong>App Store</strong>
              </button>

              <button className="store-button">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </button>

              <button className="store-button">
                <span>Download on the</span>
                <strong>Chrome Store</strong>
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section className="faq-section">

        <div className="faq-container">

          <h2>
            Frequently Asked Questions
          </h2>

          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div
                className={
                  openFaq === index
                    ? "faq-item active"
                    : "faq-item"
                }
                key={index}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >

                  <span>
                    {faq.q}
                  </span>

                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (

                  <div className="faq-answer">

                    <p>
                      {faq.a}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= DARK SECTION ================= */}

      <section className="bottom-plus">

        <div className="bottom-plus-content">

          <h2>
            Bring fun to more special occasions with Kahoot!+
          </h2>

          <p>
            Host awesome get-togethers with Kahoot!+. Get Kahoot!+ from
            $3/mo. Save 20%.
          </p>

          <button className="green-button">
            Buy now
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-column">

            <h3>About</h3>

            <a href="#">Contact us</a>
            <a href="#">Company</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Press</a>
            <a href="#">Events</a>

          </div>


          <div className="footer-column">

            <h3>Solutions</h3>

            <a href="#">For Businesses</a>
            <a href="#">Actimo</a>
            <a href="#">Motimate</a>
            <a href="#">For Schools</a>
            <a href="#">Whiteboard.fi</a>
            <a href="#">Clever</a>
            <a href="#">For Higher Education</a>
            <a href="#">For Students</a>
            <a href="#">For Family and Friends</a>
            <a href="#">Drops</a>
            <a href="#">For Kids and Parents</a>
            <a href="#">For Communities</a>
            <a href="#">Buy Kahoot! gift card</a>
            <a href="#">Redeem Kahoot! gift card</a>
            <a href="#">Kahoot!+ AccessPass</a>

          </div>


          <div className="footer-column">

            <h3>Resources</h3>

            <a href="#">Help Center</a>
            <a href="#">Blog</a>
            <a href="#">Webinars</a>
            <a href="#">Safety center</a>
            <a href="#">Guides and resources</a>
            <a href="#">Kahoot! Certified</a>
            <a href="#">Educator Community</a>
            <a href="#">Inclusivity and accessibility</a>

          </div>


          <div className="footer-column">

            <h3>Legal and Compliance</h3>

            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Trust Center</a>
            <a href="#">Acceptable Use Policy</a>
            <a href="#">Inclusion and Accessibility Policy</a>
            <a href="#">Cookie Notice</a>
            <a href="#">Cookies preference center</a>

          </div>


          <div className="footer-column social-column">

            <h3>Follow us</h3>

            <a href="#">X</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>

            <div className="partner-badges">

              <div>
                Microsoft for education partner
              </div>

              <div>
                Google for education partner
              </div>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            Copyright © 2026, Kahoot! All Rights Reserved.
          </p>

          <div className="footer-app-buttons">

            <button>
              Download on the Mac Store
            </button>

            <button>
              Download on the App Store
            </button>

            <button>
              Get it on Google Play
            </button>

            <button>
              Explore it on AppGallery
            </button>

          </div>

          <div className="footer-brand">
            Kahoot!
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;