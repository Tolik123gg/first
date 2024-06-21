import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakingbadComponent } from './brakingbad.component';

describe('BrakingbadComponent', () => {
  let component: BrakingbadComponent;
  let fixture: ComponentFixture<BrakingbadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrakingbadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrakingbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
