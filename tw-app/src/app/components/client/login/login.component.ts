import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showWelcome = false
  showLogin = !this.showWelcome;


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.showWelcome = !this.showWelcome;
    this.showLogin = !this.showWelcome;
  }

}
