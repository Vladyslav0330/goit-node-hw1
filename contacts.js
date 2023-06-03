const fs = require("fs/promises");
const path = require("path");

const readFile = async () => {
  const text = await fs.readFile("./db/contacts.json", "utf-8");
  console.log(text);
};

readFile();
