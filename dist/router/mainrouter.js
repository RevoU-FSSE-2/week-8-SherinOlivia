"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// main app/page route
router.get("/", function (req, res) {
    res.send("Hello, this is Sherin Olivia's Assignment for Week 8");
});
exports.default = router;
