import express from 'express';
import { getAllTransactionData, getTransactionDataByID, postNewTransactionData, updateTransactionData, updatetransType, updatetransName, updatetransDetail, updatetransAmount, deleteTransData } from "../controllers/controller";

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
router.patch("/ttype/:id", updatetransType);
//  Update partial transaction data (patch) : Transaction Name
router.patch("/tname/:id", updatetransName);
//  Update partial transaction data (patch) : Transaction Detail
router.patch("/tdetail/:id", updatetransDetail);
//  Update partial transaction data (patch) : Transaction Amount
router.patch("/tamount/:id", updatetransAmount);
// Delete transactio ndata
router.delete("/:id", deleteTransData);


export default router;