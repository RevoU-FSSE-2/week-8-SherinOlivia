import express from 'express';
import { getAllTransactionData, getTransactionDataByID, postNewTransactionData, updateTransactionData, updatetransType, updatetransName, updatetransDetail, updatetransAmount } from "../controllers/controller";

const router = express.Router();

// get all transaction data
router.get("/", getAllTransactionData);
//  get transaction data by id
router.get("/:id", getTransactionDataByID);
//  Post new transaction data
router.post("/", postNewTransactionData);
//  Update whole transaction data (Put)
router.put("/:id", updateTransactionData);
//  Update partial transaction data (patch) : Transaction Type
router.patch("/:id", updatetransType);
//  Update partial transaction data (patch) : Transaction Name
router.patch("/:id", updatetransName);
//  Update partial transaction data (patch) : Transaction Detail
router.patch("/:id", updatetransDetail);
//  Update partial transaction data (patch) : Transaction Amount
router.patch("/amount/:id", updatetransAmount);



export default router;