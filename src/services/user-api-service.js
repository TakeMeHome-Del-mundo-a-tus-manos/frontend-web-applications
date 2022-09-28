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

  findByName(name) {
    return http.get(`/login?name=${name}`);
  }
}