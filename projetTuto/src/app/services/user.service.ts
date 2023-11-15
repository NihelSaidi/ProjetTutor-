import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';  // Corrected import statement
//import{catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL: string = "http://localhost:3100/api";
  constructor(private httpClient: HttpClient) { }

  // Create User
  public createUser(user): Observable<any> {
    return this.httpClient.post<{ message: any }>(`${this.SERVER_URL}/users`, user);
  }
  //createEmployee(data: any): Observable<any> {
    //let url = `${this.SERVER_URL}/api/users`;
   // return this.httpClient.post(url, data).pipe(catchError(this.errorMgmt));
  // }
}
