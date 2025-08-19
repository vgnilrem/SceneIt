import express from "express";
import cors from "cors";
import showsRouter from "./routes/show.js"
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/shows", showsRouter)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));