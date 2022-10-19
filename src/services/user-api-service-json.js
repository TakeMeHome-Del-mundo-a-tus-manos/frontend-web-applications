import axios from 'axios';
import httpJson from './http/http-common-json'

export class UserApiServiceJSON {
  getAll() {
    return httpJson.get("/people");
  }

  getById(id) {
    return httpJson.get(`/people/${id}`);
  }

  create(data) {
    return httpJson.post("/people", data);
  }

  update(id, data) {
    return httpJson.put(`/people/${id}`, data);
  }

  delete(id) {
    return httpJson.delete(`/people/${id}`);
  }

  getByEmailAndPassword(email, password){
    return httpJson.post(`/people`,JSON.stringify({email,password}));
  }

  findByName(name) {
    return httpJson.get(`/people?name=${name}`);
  }
  usernameExists(username){
    
    return httpJson.get(`/people?username=${username}`)
    
  }
}