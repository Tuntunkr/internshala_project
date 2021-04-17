const mongoose= require("mongoose");

const DB = process.env.DATABASE;

//promise retrun
mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    
}).then(()=>{
    console.log(`connection is successfuly`);
}).catch((err)=>console.log(`not connection`));
