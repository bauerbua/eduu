import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: 'plain' | 'outlined' | 'contained' |'fab' = 'contained'
  @Input() color: string = 'blue'

  getStyles(): string {
    switch(this.type) {
      case 'contained': return `bg-${this.color}-500 px-4 text-white hover:bg-opacity-70`
      case 'outlined': return `border border-${this.color}-500 px-4 text-${this.color}-500 hover:bg-gray-300`
      case 'plain': return `text-${this.color}-500 px-4 hover:bg-gray-200`
      case 'fab': return `bg-${this.color}-500 rounded-full flex items-center justify-center p-4`
    }
  }

}
