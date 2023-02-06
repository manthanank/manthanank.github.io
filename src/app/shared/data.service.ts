import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://backend-yduy.onrender.com/api/'

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any>{
    return this.http.get<any>(this.url + '/blogs');
  }
  getProjects(): Observable<any>{
    return this.http.get<any>(this.url + '/projects');
  }
}
