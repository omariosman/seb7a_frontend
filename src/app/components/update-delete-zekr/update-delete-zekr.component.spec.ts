import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeleteZekrComponent } from './update-delete-zekr.component';

describe('UpdateDeleteZekrComponent', () => {
  let component: UpdateDeleteZekrComponent;
  let fixture: ComponentFixture<UpdateDeleteZekrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeleteZekrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeleteZekrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
