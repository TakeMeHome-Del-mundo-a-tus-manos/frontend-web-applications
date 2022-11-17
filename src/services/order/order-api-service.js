import http from '../http/http-common';

export class OrderApiService{
    getAll(){
        return http.get('/availableOrders');
    }

    getOrdersByStatus(statusId){
        return http.get(`/status/${statusId}`);
    }

    create(data) {
        return http.post("/availableOrders", data);
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