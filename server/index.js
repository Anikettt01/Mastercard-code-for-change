import express from "express";
import 'dotenv/config';
import cors from "cors";
import cookieParser from "cookie-parser";
import {connectDB} from "./db/index.js"
import userRoute from "./routes/authRoute.js"
import {ProjectRouter} from "./routes/projectRoute.js"
import { BeneficiaryRouter } from "./routes/beneficiaryRoute.js"
import {sendMail} from "./mailer.js"
const app = express()
const portAddress= process.env.PORT || 8000
const JWT_SECRET = process.env.JWT_SECRET;
console.log("JWT_SECRET:", JWT_SECRET);
app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({limit:"20kb", extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
  app.use(
    cors({
      origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
      credentials: true,
    })
  );


  
app.use("/", userRoute);
app.use("/", ProjectRouter);
app.use("/", BeneficiaryRouter);

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;
  console.log(" Email Sent Succesfully ")
  // Sending an email with the provided details
  sendMail(to, subject, text);

  res.send('Email sent');
});




connectDB()
.then(()=>{
    app.on("Error",(err)=>{
        console.log("Error:",err);
    })
    app.listen(portAddress,()=>{
        console.log(`Server is listening on port ${portAddress}`);
    }
    )
})
.catch((err)=>{
    console.log("MongoDB Connection Failed", err)
    
});
