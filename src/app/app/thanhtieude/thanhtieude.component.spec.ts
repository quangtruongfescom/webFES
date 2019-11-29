import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtieudeComponent } from './thanhtieude.component';

describe('ThanhtieudeComponent', () => {
  let component: ThanhtieudeComponent;
  let fixture: ComponentFixture<ThanhtieudeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhtieudeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhtieudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
