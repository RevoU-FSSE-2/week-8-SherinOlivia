import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import { finances } from "./data";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express()
const port = process.env.PORT;

app.use(bodyParser.json());


// get all finances data
app.get('/finances', (req: Request, res: Response) => {
  res.status(200).json({
    message: "Successfully 'get' all finances data",
    data: finances,
  })
})

//   get finances data by id
app.get('/finances/:id', (req, res) => {
  const finance = finances.filter((item) => { 
      return item.id === parseInt(req.params.id);
  })

  if (finance.length != 0) {
      res.json({
          message: "Succesfully get finance data by id",
          finance,
      });

  } else {
      res.json({
          message: "Failed to get finance data by id",
          finance,
      });
  }

});

//  Post
app.post('/finances', (req, res) => {
  finances.push(req.body);

  res.json({
      message: "Successfully post new finance data",
      finances
  })
})

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