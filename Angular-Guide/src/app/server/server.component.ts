import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent{
    allowNewServer = false;
    serverId : number = 10;
    serverStatus : string = 'offline';
    serverCreationStatus = 'No server was created'
    serverName = '';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000)
    }
    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
    }

    onUpdateServerName(event : Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}