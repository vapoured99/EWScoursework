import express from 'express'
import submitCtrl from '../controllers/submit.controller'


const router = express.Router()

router.route('/api/user')
  .post(submitCtrl.create)
  .post(submitCtrl.update)

router.route('/api/user')
  .get( submitCtrl.list)


export default router
