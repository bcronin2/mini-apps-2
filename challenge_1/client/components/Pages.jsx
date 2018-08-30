import React from "react";

const showPage = (val, currentPage, lastPage) =>
  val < 2 || Math.abs(val - currentPage) < 2 || val > lastPage - 2;

export default ({ currentPage, lastPage, changePage }) => {
  const pages = [...Array(lastPage).keys()].map(val => val + 1);
  return (
    <div>
      {pages.map((val, idx) => {
        if (showPage(val, currentPage, lastPage)) {
          return (
            <span>
              <span
                className={`page-number ${
                  val === currentPage ? "selected" : ""
                }`}
                onClick={() => changePage(val)}
              >
                {val}
              </span>
              {!showPage(val + 1, currentPage, lastPage) && (
                <span
                  className="page-number"
                  onClick={() => changePage(val + 1)}
                >
                  ...
                </span>
              )}
            </span>
          );
        }
      })}
    </div>
  );
};
