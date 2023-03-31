import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFileComponent } from './hero-file.component';

describe('HeroFileComponent', () => {
  let component: HeroFileComponent;
  let fixture: ComponentFixture<HeroFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
