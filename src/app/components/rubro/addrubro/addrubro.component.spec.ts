import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrubroComponent } from './addrubro.component';

describe('AddrubroComponent', () => {
  let component: AddrubroComponent;
  let fixture: ComponentFixture<AddrubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrubroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
