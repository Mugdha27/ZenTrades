import path from "path";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import taskRoute from "./routes/taskRoute.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import chatBotRoutes from "./routes/chatBotRoutes.js"
import morgan from "morgan";
import fileUpload from "express-fileupload";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(fileUpload());

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/chatbot" , chatBotRoutes)
app.use("/api/task" , taskRoute);

const __dirname = path.resolve();


//middleware routes
app.use(notFound);
app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started in dev mode on port ${PORT}`);
});
