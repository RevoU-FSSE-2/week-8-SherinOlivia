"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const router = express_1.default.Router();
// get all transaction data
router.get("/", controller_1.getAllTransactionData);
//  get transaction data by id
router.get("/:id", controller_1.getTransactionDataByID);
//  Post new transaction data
router.post("/", controller_1.postNewTransactionData);
exports.default = router;
