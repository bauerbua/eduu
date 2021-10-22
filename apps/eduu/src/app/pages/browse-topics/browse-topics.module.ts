import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowseTopicsRoutes } from './browse-topics.routing';
import { BrowseTopicsComponent } from './browse-topics.component';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [BrowseTopicsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(BrowseTopicsRoutes),
        ButtonModule
    ]
})
export class BrowseTopicsModule { }
