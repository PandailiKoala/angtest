import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {
  username = '';


  constructor() {

  }

  ngOnInit() {
  }
  onUsernameReset() {
    this.username = '';
  }
}
