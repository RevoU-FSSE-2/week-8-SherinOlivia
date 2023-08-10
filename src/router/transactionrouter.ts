import express from 'express';
import { getAllTransactionData, getTransactionDataByID, postNewTransactionData } from "../controllers/controller";

const router = express.Router();

// get all transaction data
router.get("/", getAllTransactionData);
//  get transaction data by id
router.get("/:id", getTransactionDataByID);
//  Post new transaction data
router.post("/", postNewTransactionData);


export default router;