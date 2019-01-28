import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-program',
  templateUrl: './app-program.component.html',
  styleUrls: ['./app-program.component.less']
})
export class AppProgramComponent implements OnInit {
  array = [
    './assets/images/app/main.png',
    './assets/images/app/music-list.png',
    './assets/images/app/mind.png',
    './assets/images/app/report.png',
    './assets/images/app/person.png',
    './assets/images/app/collection.png'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
