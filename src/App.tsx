import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <div className="app bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4 mt-16">
        <Profile />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
