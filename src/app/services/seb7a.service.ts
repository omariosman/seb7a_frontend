import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ZekrInterface } from '../interfaces/zekr-interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Seb7aService {
  get_first_zekr_API = "http://localhost:8000/api/v1/get_first_zekr/";
  get_all_zekr_API = "http://localhost:8000/api/v1/get_all_zekr/";
  post_new_zekr_API = "http://localhost:8000/api/v1/post_new_zekr/";
  delete_zekr_API = "http://localhost:8000/api/v1/delete_zekr/";
  update_zekr_API = "http://localhost:8000/api/v1/update_zekr/";
  increment_counter_API = "http://localhost:8000/api/v1/increment_counter/";
  reset_counter_API = "http://localhost:8000/api/v1/reset_counter/";
  try_API = "http://localhost:8000/api/v1/try_api/";

  constructor(private http: HttpClient) { }
  get_first_zekr(): Observable<ZekrInterface>{
    return this.http.get<ZekrInterface>(this.get_first_zekr_API);

  }

  get_all_zekr(): Observable<ZekrInterface[]>{
    return this.http.get<ZekrInterface[]>(this.get_all_zekr_API);
  }

  post_new_zekr(name: any){
    return this.http.post<ZekrInterface>(this.post_new_zekr_API, {'name': name})
  }

  delete_zekr(id: any){
    return this.http.post<ZekrInterface>(this.delete_zekr_API, {'id': id});
  }


  update_zekr(id: any, name: any){
    return this.http.post<ZekrInterface>(this.update_zekr_API, {'id': id, 'name': name})
  }

  incrementCounter(zekr: any){
    return this.http.post<ZekrInterface>(this.increment_counter_API, {'id': zekr.id, 'name': zekr.name})

  }

  resetCounter(zekr: any){
    return this.http.post<ZekrInterface>(this.reset_counter_API, {'id': zekr.id, 'name': zekr.name})
   
  }

  try_api(): Observable<any> {
    return this.http.post<any>(this.try_API, {"student": "abbas"});
  }


}
