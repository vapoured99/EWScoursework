import express from 'express'
import submit2Ctrl from '../controllers/submit2.controller'


const router = express.Router()

router.route('/selector/submit2')
  .post(submit2Ctrl.create)
  

router.route('selector/submit2')
  .get( submit2Ctrl.list)


export default router
