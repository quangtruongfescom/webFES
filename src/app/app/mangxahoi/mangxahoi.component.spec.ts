import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangxahoiComponent } from './mangxahoi.component';

describe('MangxahoiComponent', () => {
  let component: MangxahoiComponent;
  let fixture: ComponentFixture<MangxahoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangxahoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangxahoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
