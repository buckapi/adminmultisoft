import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrubroComponent } from './allrubro.component';

describe('AllrubroComponent', () => {
  let component: AllrubroComponent;
  let fixture: ComponentFixture<AllrubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrubroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
