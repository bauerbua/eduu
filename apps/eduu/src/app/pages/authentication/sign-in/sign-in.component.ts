import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { appUrls } from '../../../../assets/application.routes';
import { User } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnDestroy {
  private subscriptions: Subscription = new Subscription();
  public appUrls = appUrls;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signInForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  signIn(): void {
    this.subscriptions.add(
      this.authService.signIn(this.signInForm.value).subscribe(
      (res: User) => {
        // ToDo: store user role in state
        localStorage.setItem('user', JSON.stringify({username: res.username, id: res.id, role: res.role}));
        this.router.navigate([appUrls.DASHBOARD]);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
