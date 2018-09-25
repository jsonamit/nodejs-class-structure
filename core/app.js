import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import dotenv from 'dotenv';
//require('dotenv').config();
import { userRoute } from '../routes';

 class App
{
     constructor()
     {
         this.express = express();
         this.middleware();
         this.mountRoutes();
     }
     middleware()
     {
         this.express.use(cors('*'));
         this.express.use(bodyParser.json());
         this.express.use(bodyParser.urlencoded({extended:false}));

     }
     mountRoutes() {

         const router = express.Router()
         this.express.use('/api/v1', userRoute.init());

     }
}

module.exports=new App();
