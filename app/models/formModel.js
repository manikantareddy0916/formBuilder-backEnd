const mongoose = require('mongoose')
const {Schema, model}= mongoose

const formSchema = new Schema ({
    FormName : String,
    textData: String,
    textDataP: String,
    numberData: String,
    numberDataP: String,
    emailData: String,
    emailDataP: String,
    passwordData: String,
    passwordDataP: String,
    dateData: String,
    dateDataP: String
   
    
}, {timestamps: true})

const Form = model('Form', formSchema)

module.exports = Form