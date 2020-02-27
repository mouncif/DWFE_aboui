import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnClientComponent } from './ajouter-un-client.component';

describe('AjouterUnClientComponent', () => {
  let component: AjouterUnClientComponent;
  let fixture: ComponentFixture<AjouterUnClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUnClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUnClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
