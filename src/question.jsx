import React from "react";
import { useParams } from "react-router-dom";
import QuestionForm from "./question-form";

export default function Question() {
  const { number } = useParams();
  const actualNumber = parseInt(number);
  return <QuestionForm key={actualNumber} number={actualNumber} />;
}
