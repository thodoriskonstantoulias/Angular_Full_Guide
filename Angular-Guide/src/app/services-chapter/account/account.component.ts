import { Component, OnInit,Input } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private loggingService : LoggingService, private accountService : AccountService) { }

  ngOnInit() {
  }
  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    //Instead of the below we will use the logging service
    //console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);

    //Pass data through the service
    this.accountService.statusUpdated.emit(status);
  }

}
