import express, { Request, Response } from 'express';
import { transactions, Itransaction } from "../transactionsdata";
// import { Interface } from 'readline';

const router = express.Router();

// function to get all finance data
export const getAllTransactionData = (req: Request, res: Response) => {
    res.status(200).json({
      message: "Successfully 'get' all finance data",
      transactions,
    })
  }

// function to get finance data by id
export const getTransactionDataByID = (req: Request, res: Response) => { 
        const transId = parseInt(req.params.id);

  
    if (!Number.isNaN(transId)) {
        let transaction = transactions.filter((item) => item.id ===transId);
        if (transaction.length != 0) {
            res.json({
                message: "Succesfully get finance data by id",
                transaction,
            });
        } else {
            res.json({
                message: "Failed to get finance data by id / requested id may not be available",
            });
        }}
    }

//  function to post new finance data
export const postNewTransactionData = (req: Request, res: Response) => {
    const { transactionType, transactionName, transactionDetail, transactionAmount } = req.body;
    const NewTransactionID: number = transactions.length + 1;

    const newTransactionData: Itransaction = {
        id: NewTransactionID, 
        transactionType, 
        transactionName, 
        transactionDetail,
        transactionAmount, 
    };

    transactions.push(newTransactionData);

    res.json({
        message: "Successfully entered a new transaction data",
        transactions,
    });
};

// function to update transaction data (put)
export const updateTransactionData = (req: Request, res: Response) => {
    const transId = parseInt(req.params.id);
    const { transactionType, transactionName, transactionDetail, transactionAmount } = req.body;
    const transIndex = transactions.findIndex(transactions => transactions.id === transId);

    if (transId !== undefined && transactionType !== undefined && transactionName !== undefined && transactionDetail !== undefined &&  transactionAmount !== undefined) {
        transactions[transIndex].id = transId;
        transactions[transIndex].transactionType = transactionType;
        transactions[transIndex].transactionName = transactionName;
        transactions[transIndex].transactionDetail = transactionDetail;
        transactions[transIndex].transactionAmount = transactionAmount;
    } else {
        return res.status(400).json({ message: 'Data is Invalid' });
    }

    res.json({
        message: "Successfully updated transaction data",
        transactions,
    });
};






  export { router };