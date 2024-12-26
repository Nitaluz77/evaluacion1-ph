import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FigurasGeometricasComponent } from './figuras.geometricas.component';

describe('FigurasGeometricasComponent', () => {
  let component: FigurasGeometricasComponent;
  let fixture: ComponentFixture<FigurasGeometricasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FigurasGeometricasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FigurasGeometricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
