import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { ButtonModule } from '../../../../shared/components/button/button.module';

@NgModule({
  declarations: [VideoComponent],
  exports: [VideoComponent],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class VideoModule { }
