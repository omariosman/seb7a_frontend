import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seb7aComponent } from './seb7a.component';

describe('Seb7aComponent', () => {
  let component: Seb7aComponent;
  let fixture: ComponentFixture<Seb7aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Seb7aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Seb7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
