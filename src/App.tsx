import React, { useState } from "react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    "This is page 1 content.",
    "This is page 2 content.",
    "This is page 3 content.",
    "This is page 4 content.",
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* 책 컨테이너 */}
      <div className="relative w-full max-w-md h-[75vw] max-h-[500px] perspective">
        {pages.map((content, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 transform-gpu ${
              index === currentPage
                ? "z-20 rotate-y-0"
                : index < currentPage
                ? "z-10 -rotate-y-180"
                : "z-10 rotate-y-0"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 앞면 */}
            <div className="absolute w-full h-full bg-white border shadow-md flex items-center justify-center backface-hidden">
              <p className="text-center text-gray-800">{content}</p>
            </div>
            {/* 뒷면 */}
            <div className="absolute w-full h-full bg-gray-200 border shadow-md flex items-center justify-center backface-hidden transform rotate-y-180">
              <p className="text-center text-gray-600">
                Back of Page {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 컨트롤 버튼 */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
