import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Effect50Component } from './effect50.component';

describe('Effect50Component', () => {
  let component: Effect50Component;
  let fixture: ComponentFixture<Effect50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Effect50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Effect50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
