import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService : LoggingService, private accountService : AccountService) { 
    this.accountService.statusUpdated.subscribe(
      (status :string) => alert('New status : ' + status)
    );
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    //Instead of the below we will use the logging service
    //console.log('A server status changed, new status: ' + accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

}
