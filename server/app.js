import express from "express";
import postRoutes from './routes/posts.route.js';
import fileUpload from "express-fileupload";

const app = express();

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(postRoutes);

export default app;