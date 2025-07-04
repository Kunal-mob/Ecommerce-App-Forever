import express from "express"
import { verifyStripe, placeOrder,placeOrderRazorpay,placeOrderStripe, allOrders, userOrders,updatesStatus } from "../controllers/orderController.js"
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post("/list",adminAuth,allOrders)
orderRouter.post("/status", adminAuth,updatesStatus)

// Payment Feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//User Features
orderRouter.post("/userOrder",authUser, userOrders)

//Verify Payment
orderRouter.post("/verifyStripe",authUser, verifyStripe)


export default orderRouter


