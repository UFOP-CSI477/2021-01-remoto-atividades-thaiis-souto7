import 'express-async-errors';
import express, { Request, RequestHandler, Response } from 'express';
import cors from 'cors';
import { createServer } from 'http';
import AppError from '@shared/errors/AppError';
import routes from '@shared/infra/http/routes';

const app = express();
const server = createServer(app);

const url = 'http://localhost:3000';

app.use(cors({ origin: url }));
app.use(express.json() as RequestHandler);
app.use(routes);

// app.use((err: Error, request: Request, response: Response) => {
//   if (err instanceof AppError) {
//     return response
//       .status(err.statusCode)
//       .json({ message: err.message, status: err.statusCode });
//   }

//   console.log(err);

//   return response
//     .status(500)
//     .json({ message: 'Internal server error', status: 500 });
// });

export { server };
