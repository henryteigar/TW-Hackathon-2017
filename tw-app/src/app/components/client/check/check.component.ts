import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  showConfirmed = true;

  constructor() {
    setTimeout (() => {
      this.switchView();
    }, 1500)
  }

  switchView() {
    this.showConfirmed = !this.showConfirmed;
  }

  ngOnInit() {
  }

}
