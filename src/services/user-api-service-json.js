 
import httpJson from './http/http-common';
 

export class UserApiServiceJSON {
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
  usernameExists(username){
    
    return httpJson.get(`/users?username=${username}`)
    
  }
}