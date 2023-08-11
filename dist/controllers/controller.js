"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.deleteTransData = exports.updatetransAmount = exports.updatetransDetail = exports.updatetransName = exports.updatetransType = exports.updateTransactionData = exports.postNewTransactionData = exports.getTransactionDataByID = exports.getAllTransactionData = void 0;
const express_1 = __importDefault(require("express"));
const transactionsdata_1 = require("../data/transactionsdata");
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
    const transId = parseInt(req.params.id);
    if (!Number.isNaN(transId)) {
        let transaction = transactionsdata_1.transactions.filter((item) => item.id === transId);
        if (transaction.length != 0) {
            res.json({
                message: "Succesfully get finance data by id",
                transaction,
            });
        }
        else {
            res.json({
                message: "Failed to get finance data by id / requested id may not be available",
            });
        }
    }
};
exports.getTransactionDataByID = getTransactionDataByID;
//  function to post new Transaction data
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
// function to update transaction data (put)
const updateTransactionData = (req, res) => {
    const transId = parseInt(req.params.id);
    const { transactionType, transactionName, transactionDetail, transactionAmount } = req.body;
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    if (transId !== undefined && transactionType !== undefined && transactionName !== undefined && transactionDetail !== undefined && transactionAmount !== undefined) {
        transactionsdata_1.transactions[transIndex].id = transId;
        transactionsdata_1.transactions[transIndex].transactionType = transactionType;
        transactionsdata_1.transactions[transIndex].transactionName = transactionName;
        transactionsdata_1.transactions[transIndex].transactionDetail = transactionDetail;
        transactionsdata_1.transactions[transIndex].transactionAmount = transactionAmount;
    }
    else {
        return res.status(400).json({ message: 'Data is Invalid' });
    }
    res.json({
        message: "Successfully updated transaction data",
        data: transactionsdata_1.transactions[transIndex]
    });
};
exports.updateTransactionData = updateTransactionData;
// function to update transaction type (patch)
const updatetransType = (req, res) => {
    const transId = parseInt(req.params.id);
    const transactionType = req.body.transactionType;
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    if (transactionType !== undefined) {
        transactionsdata_1.transactions[transIndex].transactionType = transactionType;
    }
    else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }
    res.json({
        message: "Successfully updated transaction type",
        data: transactionsdata_1.transactions[transIndex]
    });
};
exports.updatetransType = updatetransType;
// function to update transaction name (patch)
const updatetransName = (req, res) => {
    const transId = parseInt(req.params.id);
    const transactionName = req.body.transactionName;
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    if (transactionName !== undefined) {
        transactionsdata_1.transactions[transIndex].transactionName = transactionName;
    }
    else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }
    res.json({
        message: "Successfully updated transaction name",
        data: transactionsdata_1.transactions[transIndex]
    });
};
exports.updatetransName = updatetransName;
// function to update transaction detail (patch)
const updatetransDetail = (req, res) => {
    const transId = parseInt(req.params.id);
    const transactionDetail = req.body.transactionDetail;
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    if (transactionDetail !== undefined) {
        transactionsdata_1.transactions[transIndex].transactionDetail = transactionDetail;
    }
    else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }
    res.json({
        message: "Successfully updated transaction detail",
        data: transactionsdata_1.transactions[transIndex]
    });
};
exports.updatetransDetail = updatetransDetail;
// function to update transaction detail (patch)
const updatetransAmount = (req, res) => {
    const transId = parseInt(req.params.id);
    const transactionAmount = req.body.transactionAmount;
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    if (transactionAmount !== undefined) {
        transactionsdata_1.transactions[transIndex].transactionAmount = transactionAmount;
    }
    else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }
    res.json({
        message: "Successfully updated transaction amount",
        data: transactionsdata_1.transactions[transIndex]
    });
};
exports.updatetransAmount = updatetransAmount;
// function to update transaction type (patch)
var deleteTransData = (req, res) => {
    const transId = parseInt(req.params.id);
    const transIndex = transactionsdata_1.transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }
    const deleteTransData = transactionsdata_1.transactions.splice(transIndex, 1);
    res.json({
        message: "Successfully deleted transaction amount",
        "Deleted Data": deleteTransData
    });
};
exports.deleteTransData = deleteTransData;
