import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoute } from './app/modules/student/student.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/student', studentRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('this is server set up');
});

export default app;
