
import  express  from "express";
//rest object
const  app = express();
import dotenv from "dotenv"
//configure env
dotenv.config();
import connectDB from "./dbConnection/db.js"
import morgan from "morgan";
import authroute from "./routes/authroute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoute from "./routes/productRoute.js"
import cors from "cors"



// app.get("/",(req,res)=>{
//     res.send("welcome to e-commerce app")
// })


//middelwares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/",authroute)
app.use("/",categoryRoutes)
app.use("/",productRoute)


const MONGO_URL = process.env.MONGO_URL 
app.use(express.urlencoded({ extended: true }));
//databse config
connectDB(MONGO_URL) 

const  port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

