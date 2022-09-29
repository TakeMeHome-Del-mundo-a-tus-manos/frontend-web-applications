import http from '../http/http-common';

export class OrderApiService{
    getAll(){
        return http.get('/orders');
    }
}
