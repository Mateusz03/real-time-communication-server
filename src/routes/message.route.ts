import express, { Request, Response } from "express";

export const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.send("work");
});
