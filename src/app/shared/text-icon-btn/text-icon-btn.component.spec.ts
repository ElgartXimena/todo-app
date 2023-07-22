import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextIconBtnComponent } from './text-icon-btn.component';

describe('TextIconBtnComponent', () => {
  let component: TextIconBtnComponent;
  let fixture: ComponentFixture<TextIconBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextIconBtnComponent]
    });
    fixture = TestBed.createComponent(TextIconBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
