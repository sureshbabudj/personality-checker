import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Personality Checker</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="highlight" to="/questions">
              Take Test
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
