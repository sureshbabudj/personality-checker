import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Results from "./results";
import Header from "./header";
import Intro from "./intro";
import Question from "./question";
import Questions from "./questions";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/questions" element={<Questions />}>
            <Route path=":number" element={<Question />} />
            <Route path="results" element={<Results />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}
