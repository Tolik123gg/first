import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingbadComponent } from './walkingbad.component';

describe('WalkingbadComponent', () => {
  let component: WalkingbadComponent;
  let fixture: ComponentFixture<WalkingbadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalkingbadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalkingbadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
