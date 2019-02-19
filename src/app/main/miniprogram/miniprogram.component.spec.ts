import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprogramComponent } from './miniprogram.component';

describe('MiniprogramComponent', () => {
  let component: MiniprogramComponent;
  let fixture: ComponentFixture<MiniprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
