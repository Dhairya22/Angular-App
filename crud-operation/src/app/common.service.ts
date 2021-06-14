import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { car } from './data';
import { Observable } from 'rxjs';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  obj : {
    name: string;
    number: number;
    password: string;
    address: string;
  }

  constructor(private http: HttpClient) {
    // let vr = this.dia.dataForm.getRawValue();
    // console.log("Popup form : ",vr);
    
   }

  promiseData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  setTheData(data){
    this.obj = data;
  }

  getTheData(){
    return this.obj;
    
  }

  getdata(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }

  url = "https://jsonplaceholder.typicode.com/posts/1/comments";

  getUsersData(): Observable<any> {
    return this.http.get(this.url);
  }

  // getUsersData(): Promise<any> {
  //   return new Promise((resolve) => {
  //     resolve(this.http.get(this.url));
  //   })
  // }

  getCarData(): Promise<car[]> {
    return new Promise((resolve) => {
      resolve([
        {
          "carname":"BMW X6",
          "model" : 7,
          "company": "BMW",
          "color": "Blue"
        },
        {
          "carname":"Audi R8",
          "model" : 8,
          "company": "Audi",
          "color": "Red"
        },
        {
          "carname":"Ford GT Mastang",
          "model" : 9,
          "company": "Ford",
          "color": "Yellow"
        },
        {
          "carname":"Honda Civic",
          "model" : 10,
          "company": "Honda",
          "color": "Black"
        }
      ])
    })
  }

  // getDataRecords(): Promise<data[]> {
  //   return new Promise((resolve) => {
  //     resolve([
  //       {
  //         "name": "Dhairya",
  //         "id": 312
  //       },
  //       {
  //         "name": "Aman",
  //         "id": 313
  //       }
  //     ])
  //     setTimeout(() => {
  //       resolve([
  //         {
  //           "name": "Dhairya",
  //           "id": 312
  //         },
  //         {
  //           "name": "Aman",
  //           "id": 313
  //         }
  //       ])
  //     },3000)
  //   })
  // }
}
