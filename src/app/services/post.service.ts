import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class PostService {


 private base= 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  query() {
    return this.http.get(this.base);
  }
  find(id: number) {
    return this.http.get(`${this.base}/${id}`);
  }

  save(data: any): Observable<any> {
    return !data.id ? this.http.post(this.base, data)
     : this.http.put(`${this.base}/${data.id}`, data);
  }

}
