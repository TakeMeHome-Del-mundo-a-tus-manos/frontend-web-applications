import http from '../http/http-common';

export class OrderApiService{
    getAll(){
        return http.get('/availableOrders');
    }

    create(data) {
        return http.post("/availableOrders", data);
    }
}
