import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  licensePlate: FirebaseObjectObservable<any>;
  user: FirebaseObjectObservable<any>;
  testName: String = 'Karl';
  inputPlate: String = "";

  constructor(af: AngularFire, router: Router) {
    af.database.object('/user/' + this.testName).subscribe(
      data => {
        this.user = af.database.object('/user/' + this.testName);
        this.licensePlate = af.database.object('/licenseplate/' + data.plate);
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.update({ plate: this.inputPlate })
    this.inputPlate = "";
  }

}
