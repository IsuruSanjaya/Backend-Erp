"use strict";
import express,{Request,Response} from "express";
import dotenv from "dotenv";
const debug = require("debug");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

/**
 * configure
 */
dotenv.config();
const app= express();
app.use(cors());
/**
 * Router 
 */
const routes = require("./Controller/index");
const delivery_orderController =require("./Controller/Delivery-Order/DeliveryOrder");
const delivery_itemsController = require("./Controller/Delivery-Order/Items/DeliveryItem");
const user_controller = require("./Controller/User/User");
const products_controller = require("./Controller/Product/ProductController");
const customer_controller = require("./Controller/Customer/Customer");
const purchase_order = require("./Controller/Purchase-order/PurchaseOrder");
const purchase_request = require("./Controller/Purchase-request/PurchaseRequest");
/**
 * api Doc config
 * **/
const swaggerDocument = require("./config/swagger.json");
const swaggerUi = require("swagger-ui-express");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * DB connection config
 * */
const URL = process.env.MONGODB_URL;
const uri="mongodb://db-itp:u9i7EW85Ez9N2fZRFvHOXTZG8B5jbX5zzMrAcM0ciTYbU11fKVXbOHKiVZzkiQr54Qe8X4XdPqwlDPekPANqFw==@db-itp.mongo.cosmos.azure.com:10255/erp_2022?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@db-itp@";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false });
//check Db Connection
const conn = mongoose.connection;
conn.once("open", () => {
  console.log("Mongodb Connection success!");
});

/**
 * view engine setup
 **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/**
 * url path configure
 */
app.use("/", routes);
app.use("/api/delivery-order",delivery_orderController);
app.use("/api/delivery-item",delivery_itemsController);
app.use("/api/auth",user_controller);
app.use("/api/product",products_controller);
app.use("/api/customer",customer_controller);
app.use("/api/Purchase-request",purchase_request);
app.use("/api/Purchase-order",purchase_order);

// catch 404 and forward to error handler
app.use(function (_req:Request,_res: Response, next:any) {
 let err = new Error("Not Found");
  next(err);
});

/**
 * error handlers
 * development error handler
 * will print stacktrace
*/
if (app.get("env") === "development") {
  app.use(function (err:any, _req:Request,res: Response) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

/**
 * production error handler
 * no stacktraces leaked to user
 **/
app.use(function (err:any,_req:Request,res: Response,) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

app.set("port", process.env.PORT || 5000);

app.listen(process.env.PORT,()=>{
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
