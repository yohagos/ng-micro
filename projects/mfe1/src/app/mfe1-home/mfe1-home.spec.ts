import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1Home } from './mfe1-home';

describe('Mfe1Home', () => {
  let component: Mfe1Home;
  let fixture: ComponentFixture<Mfe1Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mfe1Home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mfe1Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
