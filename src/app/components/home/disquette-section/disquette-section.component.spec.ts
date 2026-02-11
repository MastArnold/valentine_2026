import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquetteSectionComponent } from './disquette-section.component';

describe('DisquetteSectionComponent', () => {
  let component: DisquetteSectionComponent;
  let fixture: ComponentFixture<DisquetteSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisquetteSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisquetteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
