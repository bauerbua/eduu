import { Routes } from '@angular/router';
import { AuthenticationLayoutComponent } from './shared/layouts/authentication-layout/authentication-layout.component';
import { appUrls } from '../assets/application.routes';
import { AppLayoutComponent } from './shared/layouts/app-layout/app-layout.component';

export const rootRoutes: Routes = [
  {
    path: appUrls.AUTHENTICATION,
    component: AuthenticationLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: appUrls.LOGIN,
        pathMatch: 'full'
      },
      {
        path: appUrls.LOGIN,
        loadChildren: () => import('./pages/authentication/sign-in/sign-in.module').then(m=> m.SignInModule)
      },
      {
        path: appUrls.FORGOT_PASSWORD,
        loadChildren: () => import('./pages/authentication/forgot-password/forgot-password.module').then(m=> m.ForgotPasswordModule)
      },
      {
        path: appUrls.RESET_PASSWORD,
        loadChildren: () => import('./pages/authentication/reset-password/reset-password.module').then(m=> m.ResetPasswordModule)
      },
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: appUrls.DASHBOARD,
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: appUrls.BROWSE_TOPICS,
        loadChildren: () => import('./pages/browse-topics/browse-topics.module').then(m => m.BrowseTopicsModule)
      },
      {
        path: appUrls.PROFILE,
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: appUrls.MY_COURSES,
        loadChildren: () => import('./pages/your-courses/your-courses.module').then(m => m.YourCoursesModule)
      },
      {
        path: appUrls.LESSON,
        loadChildren: () => import('./pages/lesson/lesson.module').then(m => m.LessonModule)
      }
    ]
  },
];
