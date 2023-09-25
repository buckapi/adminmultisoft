import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrubroComponent } from './detailrubro.component';

describe('DetailrubroComponent', () => {
  let component: DetailrubroComponent;
  let fixture: ComponentFixture<DetailrubroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailrubroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailrubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
