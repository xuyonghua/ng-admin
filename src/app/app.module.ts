import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {HttpService} from './service/http.service';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoginModule,
    MainModule
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
