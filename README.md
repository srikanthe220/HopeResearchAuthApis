# HopeResearchAuthApis
Steps :
    1. npm install
    2. npm start
dependencies
  Db:
     using mongoDB
   
Apis
 1. login: Post call "http://localhost:3000/user/login"

       ex:body should have this parametes
        {
        "name":"srikanth",
        "email":"srikanth@gmail.com",
        "password":"test"
      }
      response:
          {
            "status":"user added sucessfully"
          }

 2. createUser:Post call "http://localhost:3000/user/login"
       ex:body should have these parameters
       {
          "email":"srikanth@gmail.com",
          "password":"test"
       }
       response:
              {
                "message": "logged in successfully"
              }

  3. forgotAndreset:Put call "http://localhost:3000/user/"  (using query params)
             ex: url : http://localhost:3000/user/forgetAndReset?email=srikanth@gmail.com&password=test1      

             response:
             {
                "message": "updated ur password"
             }
