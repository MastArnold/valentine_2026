import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerNoComponent } from './answer-no.component';

describe('AnswerNoComponent', () => {
  let component: AnswerNoComponent;
  let fixture: ComponentFixture<AnswerNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
