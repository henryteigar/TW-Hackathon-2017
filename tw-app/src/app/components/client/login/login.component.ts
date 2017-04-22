import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  accessGranted: String = '264BCM';
  response;

  constructor(private af: AngularFire, private router: Router) {
    console.log("asd1")

    af.database.object('/licenseplate/' + this.accessGranted).subscribe(
      data => {
        if(data.askConfirm == true) {
          this.router.navigateByUrl("/");
        }  
      });
  }
}
