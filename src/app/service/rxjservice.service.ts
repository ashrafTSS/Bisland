import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjserviceService {

  constructor(private http:HttpClient) { }

  user = 'https://jsonplaceholder.typicode.com/users'

  getUser():Observable<any> | any{
    this.http.get(this.user)
  }

}
