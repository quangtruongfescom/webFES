import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kienthuc2Component } from './kienthuc2.component';

describe('Kienthuc2Component', () => {
  let component: Kienthuc2Component;
  let fixture: ComponentFixture<Kienthuc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kienthuc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kienthuc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
