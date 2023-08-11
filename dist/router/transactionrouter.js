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
//  Update whole transaction data (Put)
router.put("/:id", controller_1.updateTransactionData);
//  Update partial transaction data (patch) : Transaction Type
router.patch("/:id", controller_1.updatetransType);
//  Update partial transaction data (patch) : Transaction Name
router.patch("/:id", controller_1.updatetransName);
//  Update partial transaction data (patch) : Transaction Detail
router.patch("/:id", controller_1.updatetransDetail);
//  Update partial transaction data (patch) : Transaction Amount
router.patch("/amount/:id", controller_1.updatetransAmount);
exports.default = router;
