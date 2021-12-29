import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZekrComponent } from './update-zekr.component';

describe('UpdateZekrComponent', () => {
  let component: UpdateZekrComponent;
  let fixture: ComponentFixture<UpdateZekrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateZekrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateZekrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
