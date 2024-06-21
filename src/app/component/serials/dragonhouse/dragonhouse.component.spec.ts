import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonhouseComponent } from './dragonhouse.component';

describe('DragonhouseComponent', () => {
  let component: DragonhouseComponent;
  let fixture: ComponentFixture<DragonhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonhouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragonhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
