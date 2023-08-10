import express, { Request, Response } from 'express';

const router = express.Router();

// main app/page route
router.get("/", function (req: Request, res: Response) {
    res.send("Hello, this is Sherin Olivia's Assignment for Week 8")
});

export default router;