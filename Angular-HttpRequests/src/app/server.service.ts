import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn : 'root' 
})

export class ServerService {
    constructor(private http : HttpClient){}

    storeServers(servers:any[]){
       //const headers = new Headers({'Content-Type' : 'application/json'});
       return this.http.post('https://angular-full-guide.firebaseio.com/data.json',servers);
    }
}