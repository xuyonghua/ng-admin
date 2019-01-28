import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {DailyComponent} from './daily/daily.component';
import {MiniprogramComponent} from './miniprogram/miniprogram.component';
import {AppProgramComponent} from './app-program/app-program.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'daily',
        component: DailyComponent,
        pathMatch: 'full'
      },
      {
        path: 'miniprogram',
        component: MiniprogramComponent,
        pathMatch: 'full'
      },
      {
        path: 'app-program',
        component: AppProgramComponent,
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
