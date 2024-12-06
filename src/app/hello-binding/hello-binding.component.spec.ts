import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloBindingComponent } from './hello-binding.component';

describe('HelloBindingComponent', () => {
  let component: HelloBindingComponent;
  let fixture: ComponentFixture<HelloBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
