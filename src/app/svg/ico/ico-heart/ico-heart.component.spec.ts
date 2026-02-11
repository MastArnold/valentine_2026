import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoHeartComponent } from './ico-heart.component';

describe('IcoHeartComponent', () => {
  let component: IcoHeartComponent;
  let fixture: ComponentFixture<IcoHeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcoHeartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcoHeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
