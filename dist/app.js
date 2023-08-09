"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_1 = require("./data");
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.json());
// get all finances data
app.get('/finances', (req, res) => {
    res.status(200).json({
        message: "Successfully 'get' all finances data",
        data: data_1.finances,
    });
});
//   get finances data by id
app.get('/finances/:id', (req, res) => {
    const finance = data_1.finances.filter((item) => {
        return item.id === parseInt(req.params.id);
    });
    if (finance.length != 0) {
        res.json({
            message: "Succesfully get finance data by id",
            finance,
        });
    }
    else {
        res.json({
            message: "Failed to get finance data by id",
            finance,
        });
    }
});
//  Post
app.post('/finances', (req, res) => {
    data_1.finances.push(req.body);
    res.json({
        message: "Successfully post new finance data",
        finances: data_1.finances
    });
});
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
    console.log(`Example app listening on http://localhost:${port}`);
});
