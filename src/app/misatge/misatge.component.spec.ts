import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisatgeComponent } from './misatge.component';

describe('MisatgeComponent', () => {
  let component: MisatgeComponent;
  let fixture: ComponentFixture<MisatgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisatgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisatgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
