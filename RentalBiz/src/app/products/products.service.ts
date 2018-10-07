import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<any> {
    debugger;
    return this._http.get(environment.apiurl + "/adproduct");
  }
}
