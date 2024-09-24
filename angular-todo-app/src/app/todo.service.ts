import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:5000';  

  constructor(private http: HttpClient) {}

  
  getTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  
  toggleTask(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/toggle`, { id });
  }

  
  addTask(task: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/addtask`, { task });
  }

  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removetask`, { id });
  }
}
