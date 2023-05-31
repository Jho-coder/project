import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import lapizzaRoutes from "./routes/lapizza.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(lapizzaRoutes);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
