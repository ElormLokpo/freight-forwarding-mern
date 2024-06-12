import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";

class App{
    public app:express.Application;

    constructor(){
        this.app = express();
        this.initializeMiddleware();
        this.connectDatabase();
    }

    public listen(){
        let port = process.env.PORT
        this.app.listen(port, ()=>{
            console.log(`Server running on PORT:${port}`);
        })
    }

    private initializeMiddleware(){
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    private connectDatabase(){
        mongoose.Promise = Promise;
        mongoose.connect("");
        mongoose.connection.on("error",(error:Error)=>console.log(error));
        console.log("Database Connected");
    }
}

export default App;