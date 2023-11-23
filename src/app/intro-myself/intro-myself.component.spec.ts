import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMyselfComponent } from './intro-myself.component';

describe('IntroMyselfComponent', () => {
  let component: IntroMyselfComponent;
  let fixture: ComponentFixture<IntroMyselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroMyselfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
