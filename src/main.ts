import 'hammerjs';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

preLoaderFinished();
if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function preLoaderFinished() {
  const preLoader = document.querySelector('.pre-loader');
  if (!preLoader) {
    return;
  }
  setTimeout(() => {
    preLoader.className = 'pre-loader-hidden';
  }, 100);
}
