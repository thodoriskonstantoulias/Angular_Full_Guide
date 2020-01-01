import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-services-chapter',
  templateUrl: './services-chapter.component.html',
  styleUrls: ['./services-chapter.component.css']
})
export class ServicesChapterComponent implements OnInit {

  accounts : {name:string,status:string}[] = [];
  constructor(private accountService : AccountService) { }

  ngOnInit() {
    this.accounts = this.accountService.accounts; 
  }


}
