

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WalletContext } from './WalletContext';

export class Navbar extends Component {
  static contextType = WalletContext;

  render() {
    const { account, userInfo, logout } = this.context;
    const isDark = this.props.mode === "dark";
    const textColor = isDark ? "black" : "white";
    const bgColor = isDark ? "white" : "black";

    return (
      <nav className="navbar navbar-expand-lg fixed-top shadow-sm" style={{ backgroundColor: bgColor }}>
        <div className="container-fluid px-4">
          <Link className="navbar-brand fw-bold" to="/" style={{ color: textColor }}>NewsMonkey</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" style={{ color: this.props.mode === "dark" ? "black" : "white" }} href="/">Home</a></li>

              {["business", "entertainment", "general", "health", "science", "sports", "technology"].map((item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link text-capitalize" href={`/${item}`} style={{ color: textColor }}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link" to="/City" style={{ color: textColor }}>Page</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              {/* Theme Switch */}
              <div className="form-check form-switch me-4">
                <input className="form-check-input" type="checkbox" onClick={this.props.togglemode} id="themeSwitch" />
                <label className="form-check-label" htmlFor="themeSwitch" style={{ color: textColor }}>
                  Switch Mode
                </label>
              </div>

              {/* Search Bar */}
              <form className="d-flex me-4" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" style={{ color: textColor }} type="submit">Search</button>
              </form>

              {/* Wallet / Login UI */}
              {account ? (
                <div className="d-flex align-items-center">
                  <img
                    src={userInfo?.profilePic || "https://via.placeholder.com/40"}
                    alt="Profile"
                    className="rounded-circle me-2"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                  <span className="me-3 fw-semibold" style={{ color: textColor }}>
                    {userInfo?.username || "User"}
                  </span>
                  <button className="btn btn-outline-danger btn-sm" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <Link className="btn btn-outline-dark" to="/Login">Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
