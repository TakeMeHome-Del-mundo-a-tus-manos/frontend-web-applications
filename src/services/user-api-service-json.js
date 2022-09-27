import htttpJson from './http/http-common-json'

export class UserApiServiceJSON {
  getAll() {
    return htttpJson.get("/people");
  }

  getById(id) {
    return htttpJson.get(`/people/${id}`);
  }

  create(data) {
    return htttpJson.post("/people", data);
  }

  update(id, data) {
    return htttpJson.put(`/people/${id}`, data);
  }

  delete(id) {
    return htttpJson.delete(`/people/${id}`);
  }

  getByEmailAndPassword(email, password){
    return htttpJson.post(`/people`,JSON.stringify({email,password}));
  }

  findByName(name) {
    return htttpJson.get(`/people?name=${name}`);
  }
}