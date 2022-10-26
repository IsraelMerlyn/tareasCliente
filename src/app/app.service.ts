import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) {}

  getAll(){
    return this.http.get(`${API_BASE}/tareas`);
  }

  create(tarea:any){
    return this.http.post(`${API_BASE}/tareas`, tarea);
  }

  update(id: string,tarea:any){
    return this.http.put(`${API_BASE}/tareas/${id}`, tarea);
  }

  delete(id: string){
    return this.http.delete(`${API_BASE}/tareas/${id}`);
  }


}
