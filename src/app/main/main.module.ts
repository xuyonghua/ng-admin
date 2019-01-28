import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {DailyComponent} from './daily/daily.component';
import { MiniprogramComponent } from './miniprogram/miniprogram.component';
import { AppProgramComponent } from './app-program/app-program.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [MainComponent, DailyComponent, MiniprogramComponent, AppProgramComponent, DashboardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEchartsModule
  ]
})
export class MainModule {
}
