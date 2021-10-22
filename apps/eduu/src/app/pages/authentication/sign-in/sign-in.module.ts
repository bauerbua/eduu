import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignInRoutes } from './sign-in.routing';

@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SignInRoutes),
    ReactiveFormsModule
  ]
})
export class SignInModule { }
