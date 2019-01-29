import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpLoaderService {

  constructor(
    private http: HttpClient
  ) {
  }

  private swapiUrl: string = 'https://swapi.co/api/';

  getData(url: string) {
    if (!/^http.*/i.test(url)) {
      url = this.swapiUrl + url;
    }
    return this.http.get(url).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    )
  }
}
