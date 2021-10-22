import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { appUrls } from '../../../../assets/application.routes';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  public appUrls = appUrls;
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.resetPasswordForm = fb.group({
      new_password: ['', [Validators.required]]
    });
  }

  resetPassword(): void {
    // ToDo: send and verify token again or some additional check or guard to prevent hacks
    this.authService.setNewPassword(this.resetPasswordForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['../', appUrls.LOGIN], {relativeTo: this.route});
      }
    )
  }
}
