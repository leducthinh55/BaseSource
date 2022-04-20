import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import Order from '../interfaces/Order';
import ServiceTypeModel from './ServiceTypeModel';

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    treatmentTime: String,
    serviceTypes: [
        {
        name: { type: String, required: true },
        cost: Number
        }
    ],
    totalCost: Number,
    discount: Number,
    status: Number,
    pay: Number,
    remain: Number,
    treatmentTimeAgain: String
});

const OrderModel = mongoose.models.OrderModel || mongoose.model("Order", orderSchema);
export default OrderModel;


