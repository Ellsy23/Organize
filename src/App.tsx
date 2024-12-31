import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import "animate.css/animate.min.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      img: "https://item.kakaocdn.net/do/a38bc20a170b3c1238de8d0b99d4ca21f43ad912ad8dd55b04db6a64cddaf76d",
    },
    {
      img: "https://d2x8kymwjom7h7.cloudfront.net/live/application_no/96001/default/COMMUNITY/4e14b9b8f1b740e3ac15309fb3ec7047/47db5e64a1504969af6e335fd3fb935c.png",
    },
    {
      img: "https://image.fmkorea.com/files/attach/new2/20220101/1378413927/151958955/4213168884/8d097999558dd19ee55fff2d23488db6.png",
    },
    {
      img: "https://samanbo.com/monoka/page/tobi/249-minipouch/pouch-01.gif",
    },
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

  const handleFirst = () => {
    setCurrentPage(0);
  };

  const handleLast = () => {
    setCurrentPage(pages.length - 1);
  };

  return (
    <div className="app bg-light text-center">
      {/* Header */}
      <div className="py-5 bg-primary text-white shadow">
        <h1 className="display-4 fw-bold animate__animated animate__bounce">
          🎉 골드공장 🎉
        </h1>
        <p className="lead">새해 복 많이 받으세요!</p>
      </div>

      {/* Book Container */}
      <div className="book-container container d-flex justify-content-center my-5">
        {pages.map((page, index) => (
          <div
            key={index}
            className={`page ${
              index === currentPage
                ? "visible animate__animated animate__fadeIn"
                : index < currentPage
                ? "hidden-left animate__animated animate__fadeOutLeft"
                : "hidden-right animate__animated animate__fadeOutRight"
            }`}
          >
            <div className="front bg-white border rounded shadow p-4">
              <img
                src={page.img}
                alt={`Page ${index + 1}`}
                className="img-fluid rounded mb-3"
              />
            </div>
            <div className="back bg-warning border rounded shadow p-4">
              <p>골드공장 뒤쪽 {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="controls d-flex justify-content-center gap-3 flex-wrap">
        <button
          onClick={handleFirst}
          className="btn btn-primary"
          disabled={currentPage === 0}
        >
          첫 페이지로
        </button>
        <button
          onClick={handlePrev}
          className="btn btn-warning"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="btn btn-warning"
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
        <button
          onClick={handleLast}
          className="btn btn-primary"
          disabled={currentPage === pages.length - 1}
        >
          마지막 페이지로
        </button>
      </div>
    </div>
  );
};

export default App;
