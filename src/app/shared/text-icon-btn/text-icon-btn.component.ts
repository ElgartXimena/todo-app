import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-icon-btn',
  templateUrl: './text-icon-btn.component.html',
  styleUrls: ['./text-icon-btn.component.scss']
})
export class TextIconBtnComponent {
  @Input() icon = '';
  @Input() text = '';
}
