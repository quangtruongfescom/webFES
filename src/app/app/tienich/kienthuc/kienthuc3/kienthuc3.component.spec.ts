import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Kienthuc3Component } from './kienthuc3.component';

describe('Kienthuc3Component', () => {
  let component: Kienthuc3Component;
  let fixture: ComponentFixture<Kienthuc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Kienthuc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Kienthuc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
