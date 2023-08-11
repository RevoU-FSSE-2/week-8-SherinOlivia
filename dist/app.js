"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const transactionrouter_1 = __importDefault(require("./router/transactionrouter"));
const mainrouter_1 = __importDefault(require("./router/mainrouter"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
// secret access token
const accessTokenSecret = process.env.SECRETTOKEN || "";
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
// middleware
const logRequest = (req, res, next) => {
    console.log(`Request method: ${req.method} and ${req.url}`);
    next();
};
// app.use
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(logRequest);
// Router
app.use('/', mainrouter_1.default);
app.use('/transactions', transactionrouter_1.default);
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
