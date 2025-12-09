import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes'
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    provideZonelessChangeDetection()
  ]
})
.catch((err) => console.error(err));
