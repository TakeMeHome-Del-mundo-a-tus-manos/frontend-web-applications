 
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
  getMessages(id) {
    return httpJson.get(`/messages?usersId=${id}`);
  }
  sendMessage(id, newData) {
    return httpJson.patch(`/messages/${id}`, { list_message: newData });


  }
  getCommentsById(id){
    //return httpJson.get(`/comments?id_to_like=${id}`)
    return axios.get("http://localhost:3000/api/v1/comments?id_to_like="+id)
  }
  getClaimsById(id){
    //return httpJson.get(`/comments?id_to_like=${id}`)
    return axios.get("http://localhost:3000/api/v1/claims?id_to_like="+id)
  }
}