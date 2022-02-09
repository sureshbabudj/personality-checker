import { useQuestions } from "./questions";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./progress-bar";

export default function QuestionForm({ number }) {
  const qIndex = parseInt(number) - 1;
  const options = [
    { label: "Disagree", value: -2 },
    { label: "Slightly Disagree", value: -1 },
    { label: "Neutral", value: 0 },
    { label: "Slightly Agree", value: 1 },
    { label: "Agree", value: 2 },
  ];
  // @ts-ignore
  const [questions, answers, setAnswers, notifications, setNotifications] =
    useQuestions();
  const navigate = useNavigate();

  function next() {
    const nextQ = parseInt(number) + 1;
    if (nextQ > questions.length) {
      return;
    }
    navigate("/questions/" + nextQ);
  }

  function prev() {
    const prevQ = parseInt(number) - 1;
    if (prevQ <= 0) {
      return;
    }
    navigate("/questions/" + prevQ);
  }

  function getAnsweredQuestions() {
    const actual = [];
    answers.forEach((i) => i !== null && actual.push(i));
    return actual;
  }

  async function finish() {
    if (getAnsweredQuestions().length < 5) {
      setNotifications([
        {
          id: Date.now(),
          msg: "Not enough answers! Try to answer at least 5 questions...",
          type: "error",
        },
        ...notifications,
      ]);
      return;
    }
    try {
      const response = await fetch("/api/myanswers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });
      const data = await response.json();
      navigate("../results", {
        state: data.result,
      });
    } catch (error) {
      setNotifications([
        {
          id: Date.now(),
          msg: "Internal Server Error",
          type: "error",
        },
        ...notifications,
      ]);
    }
  }

  function storeAnswer(ans) {
    answers.map((a, i) => (i === qIndex ? ans : a));
    setAnswers(answers.map((a, i) => (i === qIndex ? ans : a)));
  }

  return (
    <Fragment>
      <h3>{questions[qIndex]}</h3>
      <ul className="options">
        {options.map((ans, i) => (
          <li className="option" key={ans.label.replace(" ", "")}>
            <Checkbox
              ans={ans}
              checked={
                answers[qIndex] && parseInt(answers[qIndex]) === ans.value
              }
              storeAnswer={(val) => storeAnswer(val)}
            />
            <label htmlFor="answer">{ans.label}</label>
          </li>
        ))}
      </ul>

      <div className="question-nav">
        <p>
          QUESTION {number} OF {questions.length}
        </p>
        <ProgressBar percentage={(number / questions.length) * 100} />
      </div>

      <div className="buttons">
        <div>
          {qIndex > 0 && (
            <button className="button primary" onClick={prev}>
              Previous
            </button>
          )}
          {qIndex + 1 < questions.length && (
            <button className="button primary" onClick={next}>
              Next
            </button>
          )}
        </div>
        <button className="button outline" onClick={finish}>
          Finish
        </button>
      </div>
    </Fragment>
  );
}

export function Checkbox({ ans, checked, storeAnswer }) {
  return (
    <input
      onChange={(e) => storeAnswer(e.target.value)}
      type="radio"
      name="answer"
      value={ans.value}
      defaultChecked={checked}
      id={ans.label.replace(" ", "")}
    />
  );
}
