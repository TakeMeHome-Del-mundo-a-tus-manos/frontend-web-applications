import axios from 'axios';

export class MyOrdersApiService {

    baseUrl = 'https://localhost:7120/api/v1';


    getAll() {
        return axios.get(`${this.baseUrl}/bookedOrders`);
    }

    getByOrderCode(orderId, userId) {
        return axios.get(`${this.baseUrl}/orders/orderCode/${orderId}/user/${userId}`);
    }

    getProductByOrderId(ordeId) {
        return axios.get(`${this.baseUrl}/products/order/${ordeId}`);
    }

    // deleteOrder(type, orderId) {
    //     return axios.delete(`${this.baseUrl}/${type}Orders/${orderId}`);
    // }
    changeOrderStatusToPending(orderId, order) {
        
        return axios.patch(`${this.baseUrl}/orders/${orderId}`, order);
    }

    addOrder(type, order) {
        return axios.post(`${this.baseUrl}/${type}Orders`, order);
    }

    getCurrentProcesses(clientId) {
        return axios.get(`${this.baseUrl}/pendingOrders?clientId=${clientId}`);
    }

    getCurrentProcess(orderId) {
        return axios.get(`${this.baseUrl}/pendingOrders/${orderId}`);
    }

    sendNotification(not) {
        return axios.post(`${this.baseUrl}/notifications`, not);
    }

}