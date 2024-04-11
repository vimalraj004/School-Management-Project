let mongoose=require("mongoose")
let Schema=new mongoose.Schema({
      name:"String",
      mail:"String",
      qualification:"String",
      subject:"String",
      gender:"String",
      password:"String",
      confirmpass:"String"

})
let data=mongoose.model("Teacherslist",Schema)
module.exports=data