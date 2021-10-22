import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { AppLayoutModule } from './shared/layouts/app-layout/app-layout.module';
import { FakeBackendInterceptor } from './shared/interceptors/fake-backend.interceptor';
import { rootRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
