import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMailComponent } from './icons-mail.component';

describe('IconsMailComponent', () => {
  let component: IconsMailComponent;
  let fixture: ComponentFixture<IconsMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsMailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
