import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kienthuc1Component } from './kienthuc1.component';

describe('Kienthuc1Component', () => {
  let component: Kienthuc1Component;
  let fixture: ComponentFixture<Kienthuc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kienthuc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kienthuc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
