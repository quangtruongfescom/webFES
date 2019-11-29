import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Effect3.0Component } from './effect3.0.component';

describe('Effect3.0Component', () => {
  let component: Effect3.0Component;
  let fixture: ComponentFixture<Effect3.0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Effect3.0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Effect3.0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
