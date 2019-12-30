import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']
})

export class ServerComponent{
    allowNewServer = false;
    serverId : number = 10;
    serverStatus : string = 'offline';
    serverCreationStatus = 'No server was created'
    serverName = '';
    serverCreated = false;
    servers = ['Test server','Test server 2'];

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        },2000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
        this.serverCreated = true;
        this.servers.push(this.serverName);
    }

    getColor(){
        return this.serverStatus === 'online' ? 'blue' : 'red';
    }
}