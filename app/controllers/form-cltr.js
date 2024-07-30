const Form = require('../models/formModel')
const _ = require('lodash')


const formCltr = {}


formCltr.createTitled = async function (req,res){
    const body = _.pick(req.body,['FormName','textData','textDataP','numberData','numberDataP','emailData','emailDataP','passwordData','passwordDataP','dateData','dateDataP']); // Specify required fields
    try{
      
         const form = new Form(body)
         await form.save()
         res.status(201).json(form)    
     }
     catch(e){
         res.status(500).json(e)
     }
}

formCltr.getAllForms =async function(req,res){
    try{
        const forms = await Form.find()
        res.status(200).json(forms)
    }
    catch(e){
        res.status(500).json(e)
    }
}

module.exports = formCltr