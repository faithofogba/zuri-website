import React from "react";
import Button from "../../components/Button";
import "./Landing.css";

export default function Landing() {
  return (
    <main classN ame="container">
      <section className="hero-section">
        <div className="hero">
          <div className="logo">
            <img
              src="https://zuri.team/img/zuri-logo-full.svg"
              alt="Zuri.Team"
            />
          </div>
          <h1 className="hero-header">Learn, Build, Grow</h1>
          <p className="hero-text">
            Unlock your Brilliance with our hands-on <a href="#">beginner</a>{" "}
            and <a href="#">expert training</a>. Zuri Team has been immensely
            successful in creating a global network of a highly adept
            intelligent workforce that can help your company achieve their
            mission-critical <a href="#">projects and goals</a>
          </p>
          <Button btnClass="btn btn-red" text="I'm new to the industry" />
          <a href="#">
            <Button
              btnClass="btn btn-white"
              text="I need industry experience"
            />
          </a>
        </div>
      </section>
      <section className="about-section">
        <div className="header">
          <h2><span>By zuri</span> team</h2>
          <p>
            We cater for every level of <br /> expertise and needs in the industry.
          </p>
        </div>
      </section>
    </main>
  );
}
