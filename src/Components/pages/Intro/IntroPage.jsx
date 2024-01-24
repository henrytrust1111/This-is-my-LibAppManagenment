import React from "react";
import "./intro.css";
import { useNavigate } from "react-router";

const IntroPage = () => {
  const nav = useNavigate();
  const signIn = () => {
    nav("/login");
  };
  return (
    <div className="intro-page">
      <button onClick={signIn}>Sign in</button>
    </div>
  );
};

export default IntroPage;
