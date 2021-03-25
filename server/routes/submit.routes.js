import express from 'express'
import submitCtrl from '../controllers/submit.controller'


const router = express.Router()

router.route('/selector/submit')
  .post(submitCtrl.create)
  

router.route('selector/submit')
  .get( submitCtrl.list)


export default router
