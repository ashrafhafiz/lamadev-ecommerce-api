import { Router } from "express";

const router = Router();

router.get("/usertest", (req, res) => {
  return res.send("User is already");
});

export default router;
