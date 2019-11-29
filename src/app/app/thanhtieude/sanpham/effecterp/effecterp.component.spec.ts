import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffecterpComponent } from './effecterp.component';

describe('EffecterpComponent', () => {
  let component: EffecterpComponent;
  let fixture: ComponentFixture<EffecterpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffecterpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffecterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
