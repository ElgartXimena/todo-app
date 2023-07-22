import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './header/title/title.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
