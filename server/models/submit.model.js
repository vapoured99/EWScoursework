import mongoose from 'mongoose'

const SubmitSchema = new mongoose.Schema({

  buttonclicks :{
    type: Number,
    default: 0,
    min: 0
  },
  
  submit : {
  	type: Boolean,
  	default: false,

  }
})




export default mongoose.model('Submit', SubmitSchema)