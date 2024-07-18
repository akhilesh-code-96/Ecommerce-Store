import express from "express";
import router from "./routers/api.js";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/mern-project");

const PORT = 3000;
const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
