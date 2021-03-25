import Submit2 from '../models/submit2.model'
import extend from 'lodash/extend'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {

  const user = new Submit2(req.body)
  try {
    await user.save()
    return res.status(200).json({
      message: "Your answer has been saved to our Database!"
    })
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}





const list = async (res) => {
  try {
    let submit2 = await Submit.find({submit:true}).select('Submit2')
    res.json(submit2)
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
