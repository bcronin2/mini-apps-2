import React from "react";
import Result from "./Result.jsx";

export default ({ results }) => (
  <div>
    {results.map(result => (
      <Result result={result} />
    ))}
  </div>
);
