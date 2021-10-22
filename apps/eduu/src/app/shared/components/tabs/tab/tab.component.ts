import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() tabTitle = '';
  active = false;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }

}
