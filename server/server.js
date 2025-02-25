const express = require("express");
const app = express();

const dbConfig = require("./db");
const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
const bookingRoute = require("./routes/bookingRoute");
const path = require("path");

const _dirname = path.resolve();

app.use(express.json());
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);
app.use("/api/bookings", bookingRoute);

app.use(express.static(path.join(_dirname, "/client/build")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node app listening on ${port} port!`));
