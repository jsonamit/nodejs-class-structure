
class UserController {
    constructor() {

    }


    getUserDetails(body) {

        return new Promise((resolve, reject) => {
            let response = {}
            try {
                response.status = 200;
                response.massege = "getting data successfully";
                resolve(response);
            } catch (error) {
                resolve(error);
            }

        });

    }

    userlogin(body)
    {
        return new Promise((resolve, reject)=>{
            let response = {}
            try {
                if(body.username && body.password)
                {
                    response.status = 200;
                    response.massege = "user login successfully";
                    resolve(response);
                }
                else
                {
                    response.status = 404;
                    response.massege = "mising data";
                    resolve(response);
                }

            } catch (error) {
                resolve(error);
            }
        });
    }
}
module.exports = new UserController();