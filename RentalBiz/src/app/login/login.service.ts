import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  model: { email: string, password: string };
  public loginuser(_username, _password): Observable<any> {

    this.model = {
      email: _username,
      password: _password
    };
    return this._http.post<any>(environment.apiurl + '/user/login', this.model)
      ;
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
