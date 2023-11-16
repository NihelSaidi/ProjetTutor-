import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';  // Corrected import statement
//import{catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL: string = "http://127.0.0.1:3000";
  constructor(private httpClient: HttpClient) { }

  // Create User
  
  createUser(user: any): Observable<any> {
    let API_URL = `${this.SERVER_URL}/api/users`;
    return this.httpClient.post(API_URL, user);
  }
}
