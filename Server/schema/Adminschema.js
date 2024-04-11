let mongoose=require("mongoose")
let Schema=new mongoose.Schema({
      name:"String",
      password:"String",
     

})
let data3=mongoose.model("adminlist",Schema)
module.exports=data3