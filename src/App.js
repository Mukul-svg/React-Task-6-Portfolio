import React from "react";
import "./App.css";
import {
  FaLinkedin,
  FaGithub,
  FaDumbbell,
  FaGamepad,
  FaMusic,
  FaUtensils,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBook,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCogs,
  FaCertificate,
  FaGlobe,
  FaLanguage,
  FaBuilding,
} from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Mukul Raghav</h1>
        <p>Contact: mukulraghav2003@gmail.com</p>
      </header>

      <section className="section">
        <h2>
          <FaGraduationCap /> Education
        </h2>
        <ul>
          <li>
            <strong>
              <FaBuilding /> Vellore Institute of Technology
            </strong>
            <ul>
              <li>B.Tech in Computer Science</li>
              <li>Chennai, Tamil Nadu</li>
              <li>College of Engineering</li>
            </ul>
          </li>
          <li>
            <strong>
              <FaBuilding /> Kendriya Vidhalaya (Class XII)
            </strong>
            <ul>
              <li>Gurgaon, India</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaChalkboardTeacher /> Coursework
        </h2>
        <ul>
          <li>
            <FaBook /> Data Structures and Algorithms
          </li>
          <li>
            <FaBook /> Design and Analysis of Algorithms
          </li>
          <li>
            <FaBook /> Software Engineering
          </li>
          <li>
            <FaBook /> Operating Systems
          </li>
          <li>
            <FaBook /> Database Management Systems
          </li>
          <li>
            <FaBook /> Compiler Design
          </li>
          <li>
            <FaBook /> Theory of Computation
          </li>
          <li>
            <FaBook /> Computer Architecture and Organization
          </li>
          <li>
            <FaBook /> Computer Networks
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaCogs /> Areas of Interest
        </h2>
        <ul>
          <li>
            <FaCode /> Data Science
          </li>
          <li>
            <FaCode /> Networking/Cybersecurity
          </li>
          <li>
            <FaCode /> App Development
          </li>
          <li>
            <FaCode /> UI/UX
          </li>
          <li>
            <FaCode /> Full-Stack (Frontend & Backend)
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaLaptopCode /> Skills
        </h2>
        <ul>
          <li>
            <FaCode /> Java
          </li>
          <li>
            <FaCode /> C, C++
          </li>
          <li>
            <FaCode /> Python
          </li>
          <li>
            <FaLaptopCode /> Javascript
          </li>
          <li>
            <FaLaptopCode /> HTML, CSS
          </li>
          <li>
            <FaDatabase /> PostgreSQL
          </li>
          <li>
            <FaLaptopCode /> React, MongoDB, Node.js, Angular, Express
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaCertificate /> Certifications
        </h2>
        <ul>
          <li>
            <FaCertificate /> Machine Learning Specialization
          </li>
          <li>
            <FaCertificate /> TensorFlow Developer Specialization
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaDumbbell /> Hobbies
        </h2>
        <ul>
          <li>
            <FaDumbbell /> Sketching
          </li>
          <li>
            <FaGamepad /> Gaming
          </li>
          <li>
            <FaMusic /> Music
          </li>
          <li>
            <FaUtensils /> Cooking
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaLanguage /> Languages Known
        </h2>
        <ul>
          <li>English</li>
          <li>Hindi</li>
        </ul>
      </section>

      <section className="section">
        <h2>
          <FaGlobe /> Links
        </h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/mukul-raghav-8a8313201/">
              <FaLinkedin style={{ color: "#007BFF" }} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/Mukul-svg">
              <FaGithub style={{ color: "#000" }} /> Github
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;