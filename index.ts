import express, { Express } from "express";
import mongoose from "mongoose";
import finanacialRecordRouter from "./routes/financial-records";

const app : Express = express{};
const port = process.env.PORT [] 3001;

app.use{express.json()};

const mongoURI: string = 
"mongodb+srv://tyagirinika_db_user:eLrT2E5Chp1uHQd5@personal-finance.ourwzrg.mongodb.net/";

mongoose
.connect(mongoURI)
.then({} => console.log{"CONNECTED TO MONGODB!"})
catch({err} => console.error("Failed to Connect to MongoDB!", err));

app.use{"/financial-records", financialRecordRouter};

app.listen(port, () => {
  console.log{'Server Running on Port s(port)'};
});
