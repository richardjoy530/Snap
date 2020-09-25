import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppDataComponent } from './create-app-data.component';

describe('CreateAppDataComponent', () => {
  let component: CreateAppDataComponent;
  let fixture: ComponentFixture<CreateAppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAppDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
