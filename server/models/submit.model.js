import mongoose from 'mongoose'

const SubmitSchema = new mongoose.Schema({

 
  
  submit : {
  	type: Boolean,
  	default: false,

  }
})




export default mongoose.model('Submit', SubmitSchema)