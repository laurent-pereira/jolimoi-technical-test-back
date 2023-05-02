import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/index.js';

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
