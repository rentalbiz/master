import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }

  public registeruser(usermodel: any): Observable<any> {
    return this._http.post(environment.apiurl + '/user/register', usermodel);
  }
  public checkemailexist(Email: string): Observable<any> {
    return this._http.post(environment.apiurl + "/user/checkemailexist", {email:Email});
  }
}
