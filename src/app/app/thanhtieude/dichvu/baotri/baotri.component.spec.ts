import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaotriComponent } from './baotri.component';

describe('BaotriComponent', () => {
  let component: BaotriComponent;
  let fixture: ComponentFixture<BaotriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaotriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaotriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
