import React from "react";

export default ({ update, submit }) => (
  <input onChange={update} onKeyUp={submit} />
);
