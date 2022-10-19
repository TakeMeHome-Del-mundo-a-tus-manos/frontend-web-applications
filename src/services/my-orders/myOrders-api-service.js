import axios from 'axios';

export class MyOrdersApiService {

    baseUrl = 'http://localhost:3000/api/v1';


    getAll() {
        return axios.get(`${this.baseUrl}/booked_orders`);
    }

    getByOrderCode(orderId) {
        return axios.get(`${this.baseUrl}/booked_orders?orderCode_like=${orderId}`);
    }

    deleteOrder(type, orderId) {
        return axios.delete(`${this.baseUrl}/${type}_orders/${orderId}`);
    }

    addOrder(type, order) {
        return axios.post(`${this.baseUrl}/${type}_orders`, order);
    }

    getCurrentProcesses(){
        return axios.get(`${this.baseUrl}/pending_orders`);
    }

    getCurrentProcess(orderId){
        return axios.get(`${this.baseUrl}/pending_orders/${orderId}`);
    }

}