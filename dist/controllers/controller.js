"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.postNewTransactionData = exports.getTransactionDataByID = exports.getAllTransactionData = void 0;
const express_1 = __importDefault(require("express"));
const transactionsdata_1 = require("../transactionsdata");
// import { Interface } from 'readline';
const router = express_1.default.Router();
exports.router = router;
// function to get all finance data
const getAllTransactionData = (req, res) => {
    res.status(200).json({
        message: "Successfully 'get' all finance data",
        transactions: transactionsdata_1.transactions,
    });
};
exports.getAllTransactionData = getAllTransactionData;
// function to get finance data by id
const getTransactionDataByID = (req, res) => {
    const transaction = transactionsdata_1.transactions.filter((item) => {
        return item.id === parseInt(req.params.id);
    });
    if (transaction.length != 0) {
        res.json({
            message: "Succesfully get finance data by id",
            transactions: transactionsdata_1.transactions,
        });
    }
    else {
        res.json({
            message: "Failed to get finance data by id",
            transactions: transactionsdata_1.transactions,
        });
    }
};
exports.getTransactionDataByID = getTransactionDataByID;
//  function to post new finance data
const postNewTransactionData = (req, res) => {
    const { transactionType, transactionName, transactionDetail, transactionAmount } = req.body;
    const NewTransactionID = transactionsdata_1.transactions.length + 1;
    const newTransactionData = {
        id: NewTransactionID,
        transactionType,
        transactionName,
        transactionDetail,
        transactionAmount,
    };
    transactionsdata_1.transactions.push(newTransactionData);
    res.json({
        message: "Successfully entered a new transaction data",
        transactions: transactionsdata_1.transactions,
    });
};
exports.postNewTransactionData = postNewTransactionData;
