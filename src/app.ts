import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from "dotenv";
import transactionsRouter from "./router/transactionrouter";
import mainRouter from './router/mainrouter';
import bodyParser from "body-parser";

dotenv.config();

// secret access token
const accessTokenSecret = process.env.SECRETTOKEN || "";

const app: Express = express();
const port = process.env.PORT;


// middleware
const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request method: ${req.method} and ${req.url}`);
  next();
}


// app.use
app.use(bodyParser.json());
app.use(express.json());
app.use(logRequest);

// Router
app.use('/', mainRouter)
app.use('/transactions', transactionsRouter)


// // put
// app.put("/", (req, res) => {
//   res.send("trryyyy put");
// });

// // patch
// app.patch("/", (req, res) => {
//   res.send("coba patch");
// });


// // delete
// app.delete("/", (req, res) => {
//   res.send("deletethisss");
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})