import { Component } from '@angular/core';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus
  }
}
