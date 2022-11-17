import http from './http/http-common';


export class UserApiService {
  getAll() {
    return http.get("/login");
  }

  getById(id) {
    return http.get(`/login/${id}`);
  }

  create(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/login/${id}`, data);
  }
  

  delete(id) {
    return http.delete(`/login/${id}`);
  }

  getByEmailAndPassword(email, password) {
    return http.get(`/users/${email}/${password}`);
  }

  getPopularStores(){
    return http.get(`/popular_stores`)
  }

  getRecentOrders(id){
    //return http.get(`/completedOrders?clientId=${id}`)
    //1 AVAILABLE
    //2 IN CHAT
    //3 BOOKED
    //4 PENDING
    //5 COMPLETED
    // TODO: falta traer los productos por id de usuario y por estado de orden
    return http.get(`/orders/status/5`);

  }
  getPeople(id){
    return http.get(`/users=${id}`)
  }
  findByName(name) {
    return http.get(`/login?name=${name}`);
  }


  getAvailable_Orders(){
    return http.get(`/availableOrders`)
  }

  getPeople(){
    return http.get(`/users`)
  }

  getNotifications(id){
    return http.get(`/notifications?id=${id}`)
  }
}