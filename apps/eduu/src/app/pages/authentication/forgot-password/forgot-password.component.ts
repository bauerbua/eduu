import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { appUrls } from '../../../../assets/application.routes';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  public appUrls = appUrls
  forgotPasswordForm: FormGroup;
  verifyCodeForm: FormGroup;
  enterVerificationCode: boolean = false

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.forgotPasswordForm = fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
    this.verifyCodeForm = fb.group({
      code: ['', [Validators.minLength(5), Validators.maxLength(5), Validators.required]]
    })
  }

  sendResetLink() {
    this.authService.sendPasswordResetLink(this.forgotPasswordForm.value).subscribe(
      res => {
        console.log(res);
        this.enterVerificationCode = true;
      }
    )
  }

  verifyCode() {
    this.authService.verifyResetCode(this.verifyCodeForm.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['../', appUrls.RESET_PASSWORD], {relativeTo: this.route})
      }
    )
  }
}
