import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewZekrComponent } from './post-new-zekr.component';

describe('PostNewZekrComponent', () => {
  let component: PostNewZekrComponent;
  let fixture: ComponentFixture<PostNewZekrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewZekrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewZekrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
