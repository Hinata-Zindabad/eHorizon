const express=require('express')
const dotenv = require("dotenv")
const notesRoutes = require("./routes/notesRoutes")
const forumsRoutes = require("./routes/forumsRoutes")
const projectRoutes = require("./routes/projectRoutes")

const app=express()
dotenv.config()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.static('public'))

app.use("/notes", notesRoutes)
app.use("/forums", forumsRoutes)
app.use("/projects", projectRoutes)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/pages/index.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/pages/login.html')
})

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/pages/register.html')
})

app.listen(PORT, ()=>{
    console.log(`Server started at port: ${PORT}`)
})