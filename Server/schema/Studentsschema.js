let mongoose=require("mongoose")
let Schema=new mongoose.Schema({
      name:"String",
      mail:"String",
      std:"String",
      age:"Number",
      gender:"String",
      password:"String",
      confirmpass:"String"

})
let data2=mongoose.model("Studentslist",Schema)
module.exports=data2