import http from '../http/http-common';

export class ProductApiService{
    getAll(){
        return http.get('/products');
    }


}
