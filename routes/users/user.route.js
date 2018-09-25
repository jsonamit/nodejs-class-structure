import express from 'express';
import { userController } from '../../controller'

class userRoute
{
    constructor(){

    }

    init(){
          const route=express.Router();
          route.get('/user/', (req, res) => this.getAllUser(req, res));
          route.post('/user/login/', (req, res) => this.loginUser(req, res));
          return route;
    }

    getAllUser(req,res)
    {
        userController.getUserDetails(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
            //do a better error handler
            console.log(e)
        });
    }
    loginUser(req,res)
    {
        userController.userlogin(req.body)
            .then((response) => {
                res.json(response);
            }).catch((e) => {
            //do a better error handler
            console.log(e)
        });
    }
}

module.exports = new userRoute();
