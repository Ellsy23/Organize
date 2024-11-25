import React from "react";
import HTMLFlipBook from "react-pageflip";
import Header from "./Header";
import Profile from "./Profile";
import Projects from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

const App: React.FC = () => {
  return (
    <div className="app bg-gray-100 min-h-screen flex justify-center items-center">
      <HTMLFlipBook
        width={300}
        height={400}
        className="shadow-xl"
        showCover={true}
        children={undefined}
        style={undefined}
        startPage={0}
        size={"fixed"}
        minWidth={0}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        drawShadow={false}
        flippingTime={0}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0}
        mobileScrollSupport={false}
        clickEventForward={false}
        useMouseEvents={false}
        swipeDistance={0}
        showPageCorners={false}
        disableFlipByClick={false}
      >
        {/* Cover Page */}
        <div className="page bg-blue-500 text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <p className="text-sm mt-2">Welcome to my interactive portfolio</p>
        </div>

        {/* Profile Page */}
        <div className="page bg-white">
          <Profile />
        </div>

        {/* Projects Page */}
        <div className="page bg-white">
          <Projects />
        </div>

        {/* Skills Page */}
        <div className="page bg-white">
          <Skills />
        </div>

        {/* Contact Page */}
        <div className="page bg-white">
          <Contact />
        </div>

        {/* Back Cover */}
        <div className="page bg-blue-500 text-white flex justify-center items-center">
          <p className="text-sm">Thank you for visiting!</p>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default App;
