# HopeResearchAuthApis Assignment
## Steps :
    1. npm install
    2. npm start
## dependencies:
  ### Db:
        using mongoDB
   
## Apis
 #### 1. login: Post call "http://localhost:3000/user/login"

       ex:request body should have this parameters
       {
        "name":"srikanth",
        "email":"srikanth@gmail.com",
        "password":"test"
        } 
        
       url http://localhost:3000/user/login
       response:
          {
            "status":"user added sucessfully"
          }

 #### 2. createUser:Post call "http://localhost:3000/user/login"
       ex:request body should have these parameters
       {
          "email":"srikanth@gmail.com",
          "password":"test"
       }
       
       url: http://localhost:3000/user/login
       
       response:
              {
                "message": "logged in successfully"
              }

  #### 3. forgotAndreset:Put call "http://localhost:3000/user/forgetAndReset?email=<email_id>&password=****"  (using query params)
             ex: url : http://localhost:3000/user/forgetAndReset?email=srikanth@gmail.com&password=test1      

             response:
             {
                "message": "updated ur password"
             }
