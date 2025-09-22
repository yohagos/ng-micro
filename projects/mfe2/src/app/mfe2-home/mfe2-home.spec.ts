import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe2Home } from './mfe2-home';

describe('Mfe2Home', () => {
  let component: Mfe2Home;
  let fixture: ComponentFixture<Mfe2Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe2Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe2Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
