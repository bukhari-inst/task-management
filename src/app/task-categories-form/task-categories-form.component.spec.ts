import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCategoriesFormComponent } from './task-categories-form.component';

describe('TaskCategoriesFormComponent', () => {
  let component: TaskCategoriesFormComponent;
  let fixture: ComponentFixture<TaskCategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCategoriesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
