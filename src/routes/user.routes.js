// rouert har sar ba express lajyaty app.  userRouer.get.. bakaryat
import { Router } from "express";

const userRouer = Router();

userRouer.get("/users", (req, res) => {
  res.send("hello world");
});

export default userRouer;
