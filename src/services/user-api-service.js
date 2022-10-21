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
    return http.get(`/users?email=${email}&&password=${password}`);
  }

  getPopularStores(){
    return http.get(`/popular_stores`)
  }

  getRecentOrders(id){
    return http.get(`/completed_orders?client_id=${id}`)

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