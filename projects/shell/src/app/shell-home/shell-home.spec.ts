import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellHome } from './shell-home';

describe('ShellHome', () => {
  let component: ShellHome;
  let fixture: ComponentFixture<ShellHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
