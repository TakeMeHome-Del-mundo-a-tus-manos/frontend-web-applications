import axios from 'axios';

export class MyOrdersApiService {

    baseUrl = 'http://localhost:3000/api/v1';


    getAll() {
        return axios.get(`${this.baseUrl}/bookedOrders`);
    }

    getByOrderCode(orderId, clientId) {
        return axios.get(`${this.baseUrl}/bookedOrders?orderCode_like=${orderId}&clientId=${clientId}`);
    }

    deleteOrder(type, orderId) {
        return axios.delete(`${this.baseUrl}/${type}Orders/${orderId}`);
    }

    addOrder(type, order) {
        return axios.post(`${this.baseUrl}/${type}Orders`, order);
    }

    getCurrentProcesses(clientId){
        return axios.get(`${this.baseUrl}/pendingOrders?clientId=${clientId}`);
    }

    getCurrentProcess(orderId){
        return axios.get(`${this.baseUrl}/pendingOrders/${orderId}`);
    }

    sendNotification(not){
        return axios.post(`${this.baseUrl}/notifications`, not);
    }

}