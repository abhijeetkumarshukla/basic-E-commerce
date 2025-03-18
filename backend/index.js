const express = require("express"); 
const cors = require("cors");
const userRouter = require("./routes/user");
const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");
const connection = require("./config/db");
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth",  userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);


app.get('/',(req,res)=>{
    res.send({message:`hello admin`})
  })
 
 app.listen(PORT, async() =>{
      try {
         await connection
         console.log(`Server running on port ${PORT} and DB is connected.`)
      } catch (error) {
         console.log(error)
      }
 })