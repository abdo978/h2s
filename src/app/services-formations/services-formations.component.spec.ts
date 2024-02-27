import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFormationsComponent } from './services-formations.component';

describe('ServicesFormationsComponent', () => {
  let component: ServicesFormationsComponent;
  let fixture: ComponentFixture<ServicesFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
