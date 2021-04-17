const  Router  = require('express');
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken"); 
const express = require('express');
const router = express.Router();
require("../db/conn");
const User= require("../model/userSchema");
router.get('/',(req,res)=>{
    res.send("hello,i am router page ");
});
// using promise

// router.post('/register',(req,res)=>{

//     // array destructuring and aysnc await function

//      const {name,email,phone,work,password,cpassword } = req.body;
//      if(!name || !email || !phone || !work || !password || !cpassword){
//          return res.status(422). json({error:"plz filled the feild properly"})
//      }
      
//      User.findOne({email:email})
//      .then((userExist) =>{
//          if(userExist){
//             return res.status(422). json({error:"email alredy exist"})
//          }
//          const user = new User ({ name,email,phone,work,password,cpassword});
//          user.save().then(()=>{
//             res.status(201). json({ massage:"user registered is successful"})
//          }).catch((err)=> res.status(500).json({error:"faield to registered"}));
//      }).catch((err)=>{ console.log(err);})
// });

// async function 
router.post("/register",async(req,res)=>{
    const {name , email , phone , work , password , cpassword } =req.body;
if(!name  || !email  || !phone  || !work  || !password  || !cpassword){
    return res.status(404).json({massage:"plz filled the field properly"});
}
try{
    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(422).json({massage:"email alredy exist"})
    } else if (password != cpassword){
        return res.status(422).json({massage:"password are not matching"})
    }else{
        const user = new User({name , email , phone , work , password , cpassword });
    const userRegister = await user.save();

    res.status(201).json({massage:"user register successfully"});
    }
    // const user = new User({name , email , phone , work , password , cpassword });
    // const userRegister = await user.save();
    // if(userRegister){
    //      res.status(201).json({massage:"user register successfully"});
    // }else{
    //     res.status(500).json({massage:"field to register "})
    // }
}catch(err){
    console.log(err);
}

})


// login route

router.post("/signin",async(req,res)=>{
  try{
      let token;
      const {email, password} = req.body;

      if(!email || !password){
         return res.status(400).json({error:"invalid details"}); 
      }

         const userLogin = await User.findOne({email:email});

            //  token = await userLogin.generateAuthToken();

            //  res.cookie("jwtoken",token,{
            //      expires:new Date(Date.now() + 25892000000),
            //      httpOnly:true
            //  })

        if(userLogin){
            const ismatch = await bcrypt.compare(password,userLogin.password);

            if(!ismatch){
                res.status(400).json({massage:"invalid credientails"})
            }else{
                res.json({massage:"user Signin successfully"})
            }
            }else{
                res.status(400).json({massage:"invalid credientials "})
            }
            
        

        
  }catch(err){
      console.log(err);
  }
});
 

module.exports= router;
