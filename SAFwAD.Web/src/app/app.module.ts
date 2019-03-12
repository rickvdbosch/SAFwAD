import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MsalModule, MsalInterceptor } from '@azure/msal-angular';

import { ApiComponent } from './components/api/api.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';
import { environment } from 'src/environments/environment';
import { LogLevel } from 'msal';

export const protectedResourceMap: [string, string[]][] = [
  [environment.serviceBaseUrl,
    ['api://SAFwAD/general_access']]];

export function logThis(logLevel, message, piiLoggingEnabled) {
  console.log(message);
}

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    HomeComponent,
    SimpleComponent
],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MsalModule.forRoot({
      authority: 'https://login.microsoftonline.com/rickvdboschoutlook.onmicrosoft.com',
      clientID: 'c23c003d-f334-47a6-94b9-d8e9f7bc6d5f',
      level: LogLevel.Verbose,
      logger: logThis,
      piiLoggingEnabled: true,
      // protectedResourceMap: protectedResourceMap
  })
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true
}
],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
