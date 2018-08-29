import React from "react";

export default ({ update, submit }) => (
  <div>
    <input onChange={update} onKeyUp={submit} />
  </div>
);
