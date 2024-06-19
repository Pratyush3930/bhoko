// in package.json we changed type to module 
// The "type": "module" field in your package.json file specifies that the code in your project should be treated as ECMAScript modules (ESM) rather than CommonJS modules
//  and this is how we import the packages in this module
import express from 'express'
import cors from 'cors'

// app config
const app = express()
const PORT = 4000;

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req,res) => {
    res.send("API working")
})

app.listen(PORT,() => console.log(`App listening on port ${PORT}`))