import { Component } from '@angular/core';
import { appUrls } from '../../../../assets/application.routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  public appUrls = appUrls;
  isExpanded: boolean = true;
}
