import { Schema, model} from 'mongoose';
import mongoose  from 'mongoose';
import Customer from '../interfaces/Customer';

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    phoneNumber: String,
    gender: Boolean,
    yearOfBirth: String,
    address: String,
});

const customerModel = mongoose.models.Customer || mongoose.model('Customer', customerSchema);
export default customerModel;