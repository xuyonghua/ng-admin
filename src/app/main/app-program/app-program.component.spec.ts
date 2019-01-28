import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProgramComponent } from './app-program.component';

describe('AppProgramComponent', () => {
  let component: AppProgramComponent;
  let fixture: ComponentFixture<AppProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
