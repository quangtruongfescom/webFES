import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongtinthemComponent } from './thongtinthem.component';

describe('ThongtinthemComponent', () => {
  let component: ThongtinthemComponent;
  let fixture: ComponentFixture<ThongtinthemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongtinthemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongtinthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
