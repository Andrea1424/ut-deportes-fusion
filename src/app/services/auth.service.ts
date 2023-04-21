import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://127.0.0.1/tutorias/auth/";

  constructor(private http: HttpClient) { }

  login(login: any): Observable<Request> {
    return this.http.post<Request>(`${this.URL}login.php`, login);
  }

}
