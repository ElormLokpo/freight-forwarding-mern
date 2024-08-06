import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import Controller from "./interfaces/controllers.interface";
import mongoose from "mongoose";
import cors from "cors";


class App{
    public app:express.Application;

    constructor(controllers:Controller[]){
        this.app = express();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.connectDatabase();
    }

    public listen(){
        let port = process.env.PORT
        this.app.listen(port, ()=>{
            console.log(`Server running on PORT:${port}`);
        })
    }

    private initializeControllers(controllers: Controller[]){
        controllers.forEach((controller)=>{
            this.app.use("/", controller.router)
        });
    }

    private initializeMiddleware(){
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(cors());
      
    }

    private connectDatabase(){
        mongoose.Promise = Promise;
        mongoose.connect(process.env.MONGO_URL);
        mongoose.connection.on("error",(error:Error)=>console.log(error));
        console.log("Database Connected");
    }
}

export default App;