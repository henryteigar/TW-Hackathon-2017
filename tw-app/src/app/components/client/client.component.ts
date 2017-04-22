import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  licensePlate: FirebaseObjectObservable<any>;
  user: FirebaseObjectObservable<any>;
  testName: String = 'Karl';
  plate;
  accessGranted: String = '264BCM';


  constructor(private af: AngularFire, private router: Router) {
    af.database.object('/user/' + this.testName).subscribe(
      data => {
        this.user = af.database.object('/user/' + this.testName);
        this.licensePlate = af.database.object('/licenseplate/' + data.plate);
        this.plate = data.plate;
      });

    af.database.object('/licenseplate/' + this.accessGranted).subscribe(
      data => {
        if(data.askConfirm == false) {
          this.router.navigateByUrl("/login");
        } 
    });
    

    
  }

  accept() {
    this.licensePlate.update({ askConfirm: false });
    this.licensePlate.update({ response: true });
    this.router.navigateByUrl("/check");
  }

  decline() {
    this.licensePlate.update({ askConfirm: false });
    this.licensePlate.update({ response: false });
    this.router.navigateByUrl("/login");
  }

}