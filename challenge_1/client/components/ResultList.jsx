import React from "react";
import Result from "./Result.jsx";

export default ({ results, edit }) => (
  <div className="result-list">
    {results.map(result => (
      <Result result={result} edit={edit} />
    ))}
  </div>
);
