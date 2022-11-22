import http from './http/http-common';
import axios from 'axios';

export class UserApiService {
  baseUrl = 'https://localhost:7120/api/v1'; //https://takemehome-api.herokuapp.com/api/v1';
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
    return http.get(`/products/5/${id}`);

  }
  getPeople(id){
    return http.get(`/users=${id}`)
  }
  findByName(name) {
    return http.get(`/login?name=${name}`);
  }


  getAvailable_Orders(userId){
    return http.get(`/ordersByStatus/1/${userId}`)
  }

  getPeople(){
    return http.get(`/users`)
  }

  getProducts(){
    return axios.get(`${this.baseUrl}/products`)
  }
  getNotifications(id){
    return axios.get(`${this.baseUrl}/notifications/order/user/${id}`)
    //return http.get(`/notifications/users/${id}`)
  }
}