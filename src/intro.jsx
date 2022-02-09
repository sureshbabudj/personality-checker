import React from "react";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  function goToTest() {
    navigate("/questions");
  }
  return (
    <div className="test">
      <h3>Are you an introvert or an extrovert?</h3>
      <p>
        So do you consider yourself more of an introvert or an extrovert? Take
        this test, put together with input and find out
      </p>
      <button className="button primary large" onClick={goToTest}>
        Take Test
      </button>
    </div>
  );
}
