import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';
import { TextBtnComponent } from './text-btn/text-btn.component';
import { TextIconBtnComponent } from './text-icon-btn/text-icon-btn.component';



@NgModule({
  declarations: [
    DividerComponent,
    IconBtnComponent,
    TextBtnComponent,
    TextIconBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DividerComponent,
    IconBtnComponent,
    TextBtnComponent,
    TextIconBtnComponent
  ]
})
export class SharedModule { }
