import { Component } from '@angular/core';
import { FullscreenService } from 'src/app/services/fullscreen/fullscreen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  expand_btn = "../../../../assets/icons/expand.svg";

  constructor(public fs: FullscreenService) {}

  toggleFullscreen() {
    this.fs.toggleFullscreen();
  }

}
