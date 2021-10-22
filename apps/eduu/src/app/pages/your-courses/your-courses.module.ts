import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YourCoursesRoutes } from './your-courses.routing';
import { YourCoursesComponent } from './your-courses.component';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [YourCoursesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(YourCoursesRoutes),
    ButtonModule
  ]
})
export class YourCoursesModule { }
