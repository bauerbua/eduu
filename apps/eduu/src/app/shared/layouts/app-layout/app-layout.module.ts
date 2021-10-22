import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { SidenavModule } from '../../components/sidenav/sidenav.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    SidenavModule,
    RouterModule
  ]
})
export class AppLayoutModule { }
