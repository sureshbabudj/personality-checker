import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { useNavigate, useOutletContext, Outlet } from "react-router-dom";
import Notification from "./notification";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function fetchQuestions() {
    setLoading(true);
    try {
      const response = await fetch("/api/questions?count=50");
      const data = await response.json();
      setQuestions(data);
      setAnswers(new Array(data.length).fill(null));
      setError(false);
      setLoading(false);
      navigate("/questions/1");
    } catch (_) {
      console.log("error");
      setQuestions(null);
      setError(true);
      setLoading(false);
    }
  }

  function removeNotification(id) {
    const index = notifications.findIndex((i) => id === i.id);
    if (index === -1) {
      return;
    }
    const temp = [...notifications];
    temp.splice(index, 1);
    setNotifications([...temp]);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading questions...</div>;
  } else if (error) {
    return <div>Error loading questions</div>;
  } else {
    return (
      <Fragment>
        <div className="test">
          <Outlet
            context={[
              questions,
              answers,
              setAnswers,
              notifications,
              setNotifications,
            ]}
          />
        </div>
        {notifications.map((notification, key) => (
          <Notification
            key={notification.id}
            id={notification.id}
            msg={notification.msg}
            type={notification.type}
            onRemove={(id) => removeNotification(id)}
          />
        ))}
      </Fragment>
    );
  }
}

export function useQuestions() {
  return useOutletContext();
}
