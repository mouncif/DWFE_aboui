import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesFournisseuresComponent } from './gestion-des-fournisseures.component';

describe('GestionDesFournisseuresComponent', () => {
  let component: GestionDesFournisseuresComponent;
  let fixture: ComponentFixture<GestionDesFournisseuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionDesFournisseuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesFournisseuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
