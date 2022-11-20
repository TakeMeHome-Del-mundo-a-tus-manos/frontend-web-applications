import http from '../http/http-common';

export class OrderApiService {
    baseUrl = 'https://takemehome-api.herokuapp.com/api/v1';

    getAll(){
        return http.get('/availableOrders');
    }

    getOrdersByStatus(statusId){
        return http.get(`/orders/status/${statusId}`);
    }

    getProductByOrderId(orderId){
        return http.get(`/products/order/${orderId}`);
    }
    getByOrderStatusIdAndUserId(statusId, userId){
        return http.get(`/orders/status/${statusId}/user/${userId}`);
    }

    create(data) {
        return http.post("/availableOrders", data);
    }

    createOrder(data) {
        return http.post("/orders", data);
    }

    createOrderProduct(data) {
        return http.post("/products", data);
    }

     getPendingOrdersByTouristId(touristId){
        return http.get(`/pendingOrders?touristId=${touristId}`);
    }

    getCompletedOrdersByTouristId(touristId){
        return http.get(`/completedOrders?touristId=${touristId}`);
    }

    getAvailableOrders(){
        return http.get('/availableOrders');
    }

    getBookedOrdersByTouristId(touristId){
        return http.get(`/bookedOrders?touristId=${touristId}`);
    }

    getOrderByUserId(clientId){
        return http.get(`/availableOrders?clientId=${clientId}`);
    }
    
}