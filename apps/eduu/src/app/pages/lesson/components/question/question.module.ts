import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { ButtonModule } from '../../../../shared/components/button/button.module';

@NgModule({
  declarations: [QuestionComponent],
  exports: [QuestionComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class QuestionModule { }
