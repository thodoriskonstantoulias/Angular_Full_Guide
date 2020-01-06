import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators'; 
import { throwError } from 'rxjs';

@Injectable({
    providedIn : 'root' 
})

export class ServerService {
    constructor(private http : HttpClient){}

    storeServers(servers:any[]){
       //const headers = new Headers({'Content-Type' : 'application/json'});
       //return this.http.post('https://angular-full-guide.firebaseio.com/data.json',servers);
       return this.http.put('https://angular-full-guide.firebaseio.com/data.json',servers);
    }

    getServers(){
        return this.http.get('https://angular-full-guide.firebaseio.com/data.json')
                   .pipe(catchError(error => {
                       return throwError('Something went wrong');
                   }));
    }
}