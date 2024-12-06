import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateImageComponent } from './populate-image.component';

describe('PopulateImageComponent', () => {
  let component: PopulateImageComponent;
  let fixture: ComponentFixture<PopulateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopulateImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
