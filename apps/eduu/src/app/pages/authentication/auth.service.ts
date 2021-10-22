import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { apiEndpoints } from '../../../assets/api/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private baseService: BaseService) {}

  signIn(credentials: {username: string, password: string}): Observable<any> {
    return this.baseService.post(apiEndpoints.LOGIN, credentials)
  }

  sendPasswordResetLink(email: {email: string} ): Observable<any> {
    return this.baseService.post(apiEndpoints.RESET_PASSWORD_LINK, email)
  }

  verifyResetCode(code: { code: string }): Observable<any> {
    return this.baseService.post(apiEndpoints.VERIFY_RESET_CODE, code)
  }

  setNewPassword(newPassword: {new_password: string}): Observable<any> {
    return this.baseService.post(apiEndpoints.SET_NEW_PASSWORD, newPassword)

  }
}
