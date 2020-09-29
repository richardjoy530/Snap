import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppListingComponent } from './app-listing.component';

describe('AppListingComponent', () => {
  let component: AppListingComponent;
  let fixture: ComponentFixture<AppListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
