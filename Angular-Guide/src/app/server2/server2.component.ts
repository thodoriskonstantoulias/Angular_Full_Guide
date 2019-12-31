import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverElements = [{type :'server', name:'Test server', content:'Test'}];
  
  onServerAdded(serverData : {serverName:string, serverContent:string}) {
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    }); 
  }

  onBlueprintAdded(blueprintData : {serverName:string, serverContent:string}) {
      this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    }); 
  }


}
