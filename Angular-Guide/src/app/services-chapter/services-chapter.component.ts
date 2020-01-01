import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-chapter',
  templateUrl: './services-chapter.component.html',
  styleUrls: ['./services-chapter.component.css']
})
export class ServicesChapterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
