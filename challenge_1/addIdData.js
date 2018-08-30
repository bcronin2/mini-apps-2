const fs = require("fs");
const path = require("path");

const data = require("./data/db.json");
const filename = path.join(__dirname, "data/db-with-id.json");

const dataWithId = {
  events: data.events.map((ev, idx) => Object.assign(ev, { id: idx + 1 }))
};

fs.writeFile(filename, JSON.stringify(dataWithId), "utf8", err => {
  if (err) console.log(err);
});
