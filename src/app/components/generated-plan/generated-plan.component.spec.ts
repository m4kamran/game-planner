import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPlanComponent } from './generated-plan.component';

describe('GeneratedPlanComponent', () => {
  let component: GeneratedPlanComponent;
  let fixture: ComponentFixture<GeneratedPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
