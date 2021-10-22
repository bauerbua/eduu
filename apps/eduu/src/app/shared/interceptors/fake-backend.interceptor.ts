import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { apiEndpoints } from '../../../assets/api/api-endpoints';

// array in local storage for registered users
let users = JSON.parse(<string>localStorage.getItem('users')) || [];
const currentUsers = [
  {
    id: 1,
    email: 'bauer.j99@gmx.at',
    username: 'jakob',
    password: 'jakob',
    role: 'admin'
  }
]

const lessons = [
  {
    id: 1,
    title: '',
    video: {
      link: '',
      rating: ''
    },
    script: '',
    questions: [
      {
        title: '',
        answer: ''
      },
    ],
    resources: [
      {
        type: 'video',

      }
    ]
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
]

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith(apiEndpoints.LESSON) && method === 'GET':
          return getLessonById(request.body.id);
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith(apiEndpoints.LOGIN) && method === 'POST':
          return authenticateUser()
        case url.endsWith(apiEndpoints.RESET_PASSWORD_LINK) && method === 'POST':
          return sendResetPasswordCode()
        case url.endsWith(apiEndpoints.VERIFY_RESET_CODE) && method === 'POST':
          return verifyCode()
        case url.endsWith(apiEndpoints.SET_NEW_PASSWORD) && method === 'POST':
          return setNewPassword()
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function getLessonById(id: number) {
      return ok({
        video: '',
        id: ''
      })
    }

    function verifyCode() {
      const { code } = body;
      console.log(code);
      if (code === '12345') {
        return ok({})
      } else {
        return error('Code could not be verified');
      }
    }

    function sendResetPasswordCode() {
      const { email } = body;
      const user = currentUsers.find((x) => x.email === email);
      if (!user) return error('No registered user found for this email');
      return ok({})
    }

    function setNewPassword() {
      const { new_password } = body;
      currentUsers[0].password = new_password;
      return ok({});
    }

    function authenticateUser() {
      const { username, password } = body;
      const user = currentUsers.find((x: { username: string; password: string; }) => x.username === username && x.password === password);
      if (!user) return error('Username or password is incorrect');
      return ok({
        id: user.id,
        username: user.username,
        token: 'fake-jwt-token'
      })
    }

    function register() {
      const user = body

      if (users.find((x: { username: any; }) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken')
      }

      user.id = users.length ? Math.max(...users.map((x: { id: any; }) => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x: { id: number; }) => x.id === idFromUrl());
      return ok(user);
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x: { id: number; }) => x.id === idFromUrl());

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x: { id: number; }) => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    // helper functions

    function ok(body?: any) {
      return of(new HttpResponse({ status: 200, body }))
    }

    function error(message: string) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
