// <!-- /*
// * File: api.service.ts
// * Author: Kovács Dorina
// * Copyright: 2023,  Kovács Dorina
// * Group: Szoft II/N
// * Date: 2023-03-02
// * Github: https://github.com/Kdorina/
// * Licenc: GNU GPL
// */ -->


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host ="http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getStudents(){

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })

    let httpOption = {
      headers: headers
    }

    let endpoint = "students";
    let url = this.host + endpoint;
    return this.http.get<any>(url, httpOption);
  }

  getScores(){
     let headers = new HttpHeaders({
      'Content-Type': 'application/json'
     })
     let httpOption = {
      headers: headers
     }
     let endpoint = "scores";
     let url = this.host + endpoint;
     return this.http.get<any>(url, httpOption);
  }
}
