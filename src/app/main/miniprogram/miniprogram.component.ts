import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-miniprogram',
  templateUrl: './miniprogram.component.html',
  styleUrls: ['./miniprogram.component.less']
})
export class MiniprogramComponent implements OnInit {
  array = [
    './assets/images/miniprogram/anxiety.png',
    './assets/images/miniprogram/focused.png',
    './assets/images/miniprogram/sleep.png',
    './assets/images/miniprogram/stress.png',
    './assets/images/miniprogram/efficiency.png',
    './assets/images/miniprogram/creativity.png'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
