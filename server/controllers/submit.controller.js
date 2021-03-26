import Submit from '../models/submit.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {

  const user = new Submit(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "Your answer has been saved to our Database!",
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}





const list = async (res) => {
  try {
    let submit = await Submit.find({submit:true}).select('Submit')
    res.json(submit)
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}


export default {
  create,
  list
  
  
}
