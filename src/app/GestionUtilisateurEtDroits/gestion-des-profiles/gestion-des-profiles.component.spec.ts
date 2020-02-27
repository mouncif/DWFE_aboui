import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesProfilesComponent } from './gestion-des-profiles.component';

describe('GestionDesProfilesComponent', () => {
  let component: GestionDesProfilesComponent;
  let fixture: ComponentFixture<GestionDesProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
