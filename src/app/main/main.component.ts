import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false,
    sub4: false
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.router.navigateByUrl('login');
  }
}
