import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLevelStateComponent } from './component-level-state.component';

describe('ComponentLevelStateComponent', () => {
  let component: ComponentLevelStateComponent;
  let fixture: ComponentFixture<ComponentLevelStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentLevelStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLevelStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
