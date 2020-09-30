import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateInfoComponent } from './edit-create-info.component';

describe('EditCreateInfoComponent', () => {
  let component: EditCreateInfoComponent;
  let fixture: ComponentFixture<EditCreateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
