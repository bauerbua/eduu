import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordRoutes } from './forgot-password.routing';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ForgotPasswordRoutes),
    ReactiveFormsModule
  ]
})
export class ForgotPasswordModule { }
