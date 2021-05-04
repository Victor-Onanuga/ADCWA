import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServiceSalePeopleService {

  constructor(private http: HttpClient) { }

  getSalesPeople(){
    return this.http.get('http://localhost:8080/api/salespeople')
  }

  addSalesPerson(newSp: Object){
    return this.http.post(('http://localhost:8080/api/salespeople/'), newSp)
  }
}
