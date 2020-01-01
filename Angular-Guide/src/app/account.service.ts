import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    //Pass data to components through the service 
    statusUpdated = new EventEmitter<string>();

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
    }  

    updateStatus(id: number, newStatus: string){
        this.accounts[id].status = newStatus;
    }

}