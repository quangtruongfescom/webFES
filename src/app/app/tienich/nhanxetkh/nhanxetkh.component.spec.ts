import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanxetkhComponent } from './nhanxetkh.component';

describe('NhanxetkhComponent', () => {
  let component: NhanxetkhComponent;
  let fixture: ComponentFixture<NhanxetkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanxetkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanxetkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
