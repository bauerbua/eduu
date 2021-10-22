import { Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';

export const LessonRoutes: Routes = [
  { path: ':id', component: LessonComponent }
];
