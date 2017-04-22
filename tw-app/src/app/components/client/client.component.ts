import { Component } from '@angular/core';
import {AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  licensePlate: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.licensePlate = af.database.object('/licenseplate/486HJF');
  }

}