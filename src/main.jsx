import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Shared/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Footer from "./Shared/Footer.jsx";
import Stats from "./Stats/Stats.jsx";
import Platform from "./Platform/Platform.jsx";
import Matching from "./matching/Matching.jsx";
import Mentoring from "./Mentoring/Mentoring.jsx";
import Union from "./Union/Union.jsx";
import Builder from "./Builder/Builder.jsx";
import Technology from "./Technology/Technology.jsx";
import Work from "./Work/Work.jsx";
import Choose from "./Choose/Choose.jsx";
import Suite from "./Suite/Suite.jsx";
import Pricing from "./Pricing/Pricing.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Questions from "./Questions/Questions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="lg:ms-44 md:ms-32 sm:ms-8">
      <Navbar></Navbar>
      <Home></Home>
      <Stats></Stats>
      <Platform></Platform>
      <Matching></Matching>
      <Mentoring></Mentoring>
      <Union></Union>
      <Builder></Builder>
      <Technology></Technology>
      <Work></Work>
      <Choose></Choose>
      <Suite></Suite>
      <Pricing></Pricing>
      <Feedback></Feedback>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  </StrictMode>
);
