require ('dotenv').config()
const express = require ('express')
const cors = require('cors')

const configureDB = require('./config/db')

const formCltr = require ('./app/controllers/form-cltr')


const port = 3454
const app = express()
app.use(express.json())
app.use(cors())
configureDB()



app.post('/api/form/create', formCltr.createTitled)
app.get('/api/Allforms', formCltr.getAllForms)




app.listen(port, ()=>{
    console.log('server running on port', port)
})
