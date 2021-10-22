import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { RouterModule } from '@angular/router';
import { LessonRoutes } from './lesson.routing';
import { VideoModule } from './components/video/video.module';
import { QuestionModule } from './components/question/question.module';
import { ButtonModule } from '../../shared/components/button/button.module';
import { TabsModule } from '../../shared/components/tabs/tabs.module';

@NgModule({
  declarations: [LessonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LessonRoutes),
    VideoModule,
    QuestionModule,
    TabsModule,
    ButtonModule
  ]
})
export class LessonModule { }
