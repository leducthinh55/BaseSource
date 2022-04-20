import { Schema, model} from 'mongoose';
import ServiceType from '../interfaces/ServiceType';

const schema = new Schema<ServiceType>({
    name: { type: String, required: true },
    cost: Number
});

const ServiceTypeModel = model<ServiceType>('ServiceType', schema);

export default ServiceTypeModel;

