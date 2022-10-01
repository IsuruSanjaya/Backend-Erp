"use strict";
import express,{Request,Response} from "express";
const router = express.Router();

router.get("/", (__req:Request, __res:Response) => {
  __res.render("index", { title: "ERP Solution" });
});



module.exports = router;
