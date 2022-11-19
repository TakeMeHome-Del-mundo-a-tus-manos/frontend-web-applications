 
import httpJson from './http/http-common';
import axios from 'axios';

export class UserApiServiceJSON {
  baseUrl = 'https://localhost:7120/api/v1';

  getAll() {
    return httpJson.get("/users");
  }

  getById(id) {
    return httpJson.get(`/users/${id}`);
  }

  create(data) {
    return httpJson.post("/users", data);
  }

  update(id, data) {
    return httpJson.put(`/users/${id}`, data);
  }

  delete(id) {
    return httpJson.delete(`/users/${id}`);
  }

  getByEmailAndPassword(email, password){
    return httpJson.post(`/users`,JSON.stringify({email,password}));
  }

  findByName(name) {
    return httpJson.get(`/users?name=${name}`);
  }
  emailExists(email){

    return httpJson.get(`/users/email/${email}`)
  }
  getMessages(id) {
    return httpJson.get(`/messages?usersId=${id}`);
  }
  sendMessage(id, newData) {
    return httpJson.patch(`/messages/${id}`, { list_message: newData });


  }
  getCommentsById(id){
    //return httpJson.get(`/comments?id_to_like=${id}`)
    return axios.get(`${this.baseUrl}/comments/order/user/${id}`)
  }
}