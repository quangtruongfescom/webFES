import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstrangchuComponent } from './csstrangchu.component';

describe('CsstrangchuComponent', () => {
  let component: CsstrangchuComponent;
  let fixture: ComponentFixture<CsstrangchuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstrangchuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
