import Customer from "./Customer";
import ServiceType from "./ServiceType";

export default interface Order {
    customer: Customer;
    treatmentTime: string;
    serviceTypes: Array<ServiceType>,
    totalCost: number;
    discount: number;
    status: number;
    pay: number;
    remain: number;
    treatmentTimeAgain: string;
}