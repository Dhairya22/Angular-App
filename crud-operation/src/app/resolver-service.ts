import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
})

export class ResolverService implements Resolve<any> {

    constructor(private data: CommonService, private http: HttpClient) { }

    resolve() {

        // console.log("data : ", this.http.get('https://api.github.com/users'));
        let items = {
            dataaaaa: this.http.get('https://api.github.com/users')
        }

        
        
        let data = {
            carData: this.data.getCarData(),
            userData: this.data.getUsersData(),
            githubData: this.http.get('https://api.github.com/users'),
            // appCompoData: this.http.get('https://api.github.com/users')
        }
        return items;
        return data;



    }

}