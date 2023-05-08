import express from "express"
const router = express.Router()
import authControllers from "../controllers/authControllers.js" 
import { requireSignIn,isAdmin } from "../middleware/authMiddleware.js"


router.post("/register",authControllers.registerController)
router.post("/login",authControllers.loginController)


// router.get("/user-auth",requireSignIn,(req,res)=>{
//     res.status(200).send({ok:true});
// })

//Forgot Password || POST

 router.post("/forgotpassword",authControllers.forgotPasswordController);
 router.post("/resetPasssword/:id/",authControllers.ResetPasssword);





//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


// //protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile",requireSignIn,authControllers.updateProfileController)

//  Orders   

 router.get("/orders",requireSignIn,authControllers.ordersController)
 router.get("/all-orders",requireSignIn,isAdmin,authControllers.getAllOrdersController)
 router.put("/orderStatus/:orderId",requireSignIn,isAdmin,authControllers.orderStatusController)




export default router
