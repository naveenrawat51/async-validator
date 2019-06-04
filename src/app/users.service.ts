import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers( email: string){
    return this.httpClient.get<any[]>(`${this.url}?email=${email}`);
  }
  getAllUserEmail(){
    return this.httpClient.get<any[]>(this.url);
  }
}
