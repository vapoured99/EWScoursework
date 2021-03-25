import mongoose from 'mongoose'

const Submit2Schema = new mongoose.Schema({

  
  submit2 : {
  	type: Boolean,
  	default: false,

  }
})




export default mongoose.model('Submit2', Submit2Schema)