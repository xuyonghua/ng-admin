import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.less']
})
export class DailyComponent implements OnInit {
  dataSet = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 46; i++) {
      this.dataSet.push({
        key: `${i + 1}`,
        date: '2019-01-10',
        dailyWords: '冬天从这里夺去的，春天会交还给你。',
        sources: '海涅',
        status: '已发布'
      });
    }
  }

}
