import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

export default function Results() {
  const { state } = useLocation();
  console.log(state);
  return (
    <Fragment>
      <h3>Results</h3>
      <p>
        <strong className="result">{state}</strong>
      </p>
    </Fragment>
  );
}
