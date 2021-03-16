import express from 'express'
import userCtrl from '../controllers/user.controller'
import authCtrl from '../controllers/auth.controller'







const hasAdminAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id && req.admin == true
  if (!(authorized)) {
  return res.status('403').json({
  error: "User is not authorized for admin"
  })
  }
  next()
 }






const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)



router.route('/api/users/admin/:userId')
 .get(authCtrl.requireSignin, authCtrl.hasAdminAuthorization, userCtrl.list)



export default router
