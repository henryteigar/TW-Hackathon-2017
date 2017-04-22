import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  licensePlate: FirebaseObjectObservable<any>;
  testName: String = 'Karl';

  constructor(af: AngularFire, router: Router) {
    af.database.object('/user/' + this.testName).subscribe(
      data => {
        this.licensePlate = af.database.object('/licenseplate/' + data.plate);
      });
  }

  ngOnInit() {
  }

}
