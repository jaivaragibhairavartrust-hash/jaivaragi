import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.png'; // Place your logo in src/logo.png

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-light py-3 border-bottom">
        <div className="container d-flex align-items-center">
          <img src={logo} alt="Trust Logo" style={{height: 60, marginRight: 16}} />
          <h1 className="h4 mb-0">JAI SHREE MAHASHAKTHI VARAGIBHAIRAVAR TRUST</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/activities">Activities</a></li>
              <li className="nav-item"><a className="nav-link" href="/donations">Donations</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1 container py-4">
        <h2>Welcome to the Temple Website</h2>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-auto border-top">
        <div className="container text-center">
          &copy; {new Date().getFullYear()} JAI SHREE MAHASHAKTHI VARAGIBHAIRAVAR TRUST. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
