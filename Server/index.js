let express=require("express")
let cors=require("cors")
let bodyparser=require("body-parser")
let mongoose=require("mongoose")
let data=require("./schema/Teachersschema")
let data2=require("./schema/Studentsschema")
let data3=require("./schema/Adminschema")
mongoose.connect("mongodb://127.0.0.1:27017/schoolmanagement")
mongoose.connection
.once("open",()=>{console.log("db connected");})
.on("err",()=>{console.log("db failed to connect");})
let app=express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

// ----------------------------Admin (teachers)-----------------------------------------------
app.post("/teachersregpage",(req,res)=>{
    data.findOne({mail:req.body.mail})
    .then((x)=>{
        if(x!=null){
            res.json("usermail is already in use")
        }
        else{
           
            let db=new data(req.body)
            db.save()
            .then((res)=>{res.json("data stored in the db");})
            .catch((err)=>{res.json(err);})
        }
    })
    .catch(()=>{})
//   console.log(req.body);
   
})
app.get("/teacherslist",(req,res)=>{
    data.find()
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.get("/teacherseditpage/:id",(req,res)=>{
    let id=req.params.id
    data.findOne({_id:id})
    .then((z)=>{res.json(z)})
    .catch((err)=>{res.json(err)})

})
app.post("/teachersupdatedata/:id",(req,res)=>{
    let id=req.params.id
    data.updateOne({_id:id},req.body)
    .then((y)=>{res.json(y)})
    .catch((err)=>{res.json(err)})
})
app.post("/deleteteacherscard/:id",(req,res)=>{
    let id=req.params.id
    data.deleteOne({_id:id})
    .then(()=>{console.log("data deleted from db");})
    .catch(()=>{console.log("failed to delete the data from db");})
})
// ----------------------------Admin (Students)-----------------------------------------------
app.get("/studentslist",(req,res)=>{
    data2.find()
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
app.post("/deletestudentscard/:id",(req,res)=>{
    let id=req.params.id
    data2.deleteOne({_id:id})
    .then(()=>{console.log("data deleted from db");})
    .catch(()=>{console.log("failed to delete the data from db");})
})
app.post("/studentsregpage",(req,res)=>{
    data2.findOne({mail:req.body.mail})
    .then((x)=>{
        if(x!=null){
            res.json("usermail is already in use")
        }
        else{
           
            let db=new data2(req.body)
            db.save()
            .then((res)=>{res.json("data stored in the db");})
            .catch((err)=>{res.json(err);})
        }
    })
    .catch(()=>{})
//   console.log(req.body);
   
})
app.get("/studentseditpage/:id",(req,res)=>{
    let id=req.params.id
    data2.findOne({_id:id})
    .then((z)=>{res.json(z)})
    .catch((err)=>{res.json(err)})

})
app.post("/studentsupdatedata/:id",(req,res)=>{
    let id=req.params.id
    data2.updateOne({_id:id},req.body)
    .then((y)=>{res.json(y)})
    .catch((err)=>{res.json(err)})
})
// --------------------------------------teacherlogin--------------------------
app.post("/teacherlogin",(req,res)=>{
    data.findOne({mail:req.body.teachermail})
    .then((x)=>{
        if(x!=null){
            res.json(x)
        }
        else{
            res.json("usernot found")
        }
    })
    .catch((err)=>{res.json(err)})
})

app.get("/staffpage/:id",(req,res)=>{
    let id=req.params.id
    data.findOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
// --------------------------------------studentlogin--------------------------
app.post("/studentlogin",(req,res)=>{
    data2.findOne({mail:req.body.studentmail})
    .then((x)=>{
        if(x!=null){
            res.json(x)
        }
        else{
            res.json("usernot found")
        }
    })
    .catch((err)=>{res.json(err)})
})
app.get("/clientpage/:id",(req,res)=>{
    let id=req.params.id
    data2.findOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)})
})
// --------------------------------------adminlogin--------------------------
app.post("/adminlogin",(req,res)=>{
    console.log(req.body.adminname);
    data3.findOne({name:req.body.adminname})
    .then((x)=>{
        if(x!=null){
            res.json(x)
        }
        else{
            res.json("usernot found")
        }
    })
    .catch((err)=>{res.json(err)})
})

app.listen("555",()=>{
       console.log("ur 555 port is running");
})