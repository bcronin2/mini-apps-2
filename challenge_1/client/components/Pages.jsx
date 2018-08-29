import React from "react";

export default ({ currentPage, lastPage, changePage }) => {
  const pages = [...Array(lastPage).keys()];
  return (
    <div>
      {pages.map((val, idx) => (
        <div onClick={() => changePage(val)}>{val}</div>
      ))}
    </div>
  );
};
