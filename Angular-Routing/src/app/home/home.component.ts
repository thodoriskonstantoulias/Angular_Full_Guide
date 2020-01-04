import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubs : Subscription;
  customObsSubs : Subscription;

  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit() {
    //1st example of Observables
    const myNumbers = Observable.interval(1000);
    this.numbersObsSubs =  myNumbers.subscribe(
      (number:number) => {
        console.log(number);
      }
    );

    //2nd example of Observables
    const myObservable = Observable.create((observer:Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('error occured');
      }, 5000);
    });

    this.customObsSubs =  myObservable.subscribe(
      (data:string) => {
        console.log(data);
      },
      (error:string) => {
        console.log(error);
      },
      () => {
        console.log('completed!');
      }
    );
  }

  ngOnDestroy(){
    this.numbersObsSubs.unsubscribe();
    this.customObsSubs.unsubscribe();
  }

  onLoadServers(){
    this.router.navigate(['/servers']);
  }

  onLoadServer(id : number){
    this.router.navigate(['/servers',id,'edit'],{queryParams : {allowEdit:'1'}});
  }

  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }

}
