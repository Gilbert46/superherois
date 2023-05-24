import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisatgesComponent } from './misatges.component';

describe('MisatgesComponent', () => {
  let component: MisatgesComponent;
  let fixture: ComponentFixture<MisatgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisatgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisatgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
