import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';
import { ResetPasswordRoutes } from './reset-password.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  exports: [ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ResetPasswordRoutes),
    ReactiveFormsModule
  ]
})
export class ResetPasswordModule { }
