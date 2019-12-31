import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>();;
  //newServerName = '';
  //newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput,serverContentInput) {
    this.serverCreated.emit({serverName : serverNameInput.value, serverContent : serverContentInput.value});
  }

  onAddBlueprint(serverNameInput,serverContentInput) {
    this.bluePrintCreated.emit({serverName : serverNameInput.value, serverContent : serverContentInput.value});
  }

}
