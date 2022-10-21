import http from './http/http-common';


export class ProductService {

	getProducts() {
		return http.get("/cars");
	}
 
}

    