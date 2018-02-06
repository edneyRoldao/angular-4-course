import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  serverCreationStatus = 'no server was created so far!';
  serverCreationStatus2 = 'no server was created so far! 2';
  showVersion = false;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onUpdateServerName(event: any) {
    this.serverCreationStatus = (<HTMLInputElement>event.target).value;
  }

  displayVersion() {
    this.showVersion = !this.showVersion;
  }

}
