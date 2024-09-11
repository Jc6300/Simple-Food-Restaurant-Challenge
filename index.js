import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <div className="button-container">
        <button>Our Menu</button>
        <button>About</button>
        <button>Hours & Location</button>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="logo-container">
      <div className="image-wrapper">
        <img className="hot-dog" src="images/hotdogs.jpg" alt="Hot dogs" />
      </div>

      <div className="image-wrapper">
        <img src="images/sandwich.jpg" alt="Sandwich" />
      </div>

      <div className="image-wrapper">
        <img src="images/sandwich.jpg" alt="Hamburgers" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Made by{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          Cheeky Coding Company
        </a>
        ™.
      </p>
    </footer>
  );
}
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
