import express, { Request, Response } from 'express';
import { transactions, Itransaction } from "../data/transactionsdata";
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
    const transIndex = transactions.findIndex(transaction => transaction.id === transId);

    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    }

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
        data: transactions[transIndex]
    });
};

// function to update transaction type (patch)
export const updatetransType = (req: Request, res: Response) => {
    const transId = parseInt(req.params.id);
    const transactionType = req.body.transactionType;

    const transIndex = transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    } 

    if (transactionType !== undefined) {
        transactions[transIndex].transactionType = transactionType;
    } else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }

    res.json({
        message: "Successfully updated transaction type",
        data: transactions[transIndex]
    });
}

// function to update transaction name (patch)
export const updatetransName = (req: Request, res: Response) => {
    const transId = parseInt(req.params.id);
    const transactionName = req.body.transactionName;

    const transIndex = transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    } 

    
    if (transactionName !== undefined) {
        transactions[transIndex].transactionName = transactionName;
    } else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }

    res.json({
        message: "Successfully updated transaction name",
        data: transactions[transIndex]
    });
}

// function to update transaction detail (patch)
export const updatetransDetail = (req: Request, res: Response) => {
    const transId = parseInt(req.params.id);
    const transactionDetail = req.body.transactionDetail;

    const transIndex = transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    } 

    if (transactionDetail !== undefined) {
        transactions[transIndex].transactionDetail = transactionDetail;
    } else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }

    res.json({
        message: "Successfully updated transaction detail",
        data: transactions[transIndex]
    });
}

// function to update transaction detail (patch)
export const updatetransAmount = (req: Request, res: Response) => {
    const transId = parseInt(req.params.id);
    const transactionAmount = req.body.transactionAmount;

    const transIndex = transactions.findIndex(transaction => transaction.id === transId);
    if (transIndex === -1) {
        return res.status(404).json({ message: 'Data is not found' });
    } 

    if (transactionAmount !== undefined) {
        transactions[transIndex].transactionAmount = transactionAmount;
    } else {
        return res.status(400).json({ message: 'Data Update Failed' });
    }

    res.json({
        message: "Successfully updated transaction amount",
        data: transactions[transIndex]
    });

}



  export { router };