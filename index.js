
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const ConnectDB = require("./config/db.connect");


const port = process.env.PORT || 8090;


process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});



const server = app.listen(port, async () => {
  await ConnectDB();
  console.log(`Server running on http://localhost:${port}`);
});


process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
