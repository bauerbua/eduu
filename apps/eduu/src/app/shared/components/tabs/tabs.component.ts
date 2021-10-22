import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabs: any[] = [];

  addTab(tab: any) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab)
  }

  selectTab(tab: any) {
    this.tabs.forEach((tabItem) => {
      tabItem.active = false;
    });
    tab.active = true
  }

}
